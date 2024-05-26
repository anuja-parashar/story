import { Component, Inject, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Variables, createVariables } from './constants';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe, DOCUMENT } from '@angular/common';
import * as moment from 'moment';
import { LoaderService } from "../../../services/loader.service";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-appication',
  templateUrl: './appication.component.html',
  styleUrls: ['./appication.component.scss']
})
export class AppicationComponent implements OnInit {

  variables: createVariables = Variables;
  displayedColumns: string[] = ['image', 'ApplicationNo', 'PolicyNo', 'ApplicantName', 'SumInsured', 'PlanName', 'InsertionDatetime', 'STPStatus', 'ViewInDetails'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild('paginatorUnderwriting') paginator!: MatPaginator;
  @Input() max: any;
  isLoading: boolean = false;
  filterForm: FormGroup;
  tomorrow = new Date();
  applicant_list: any[] = [];
  private destroy$ = new Subject<void>();

  get fromDate() {
    return moment(this.filterForm.get('fromDate')?.value).format('YYYY-MM-DD')
  }

  get toDate() {
    return moment(this.filterForm.get('toDate')?.value).format('YYYY-MM-DD');
  }

  constructor(
    private api: ApiService,
    private router: Router,
    private formBuilder: FormBuilder,
    private loader: LoaderService,
    @Inject(DOCUMENT) private document: Document,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer) {

    this.tomorrow.setDate(this.tomorrow.getDate());
    this.filterForm = this.formBuilder.group({
      fromDate: [null],
      toDate: [null],
      planName: [null],
      status: [null],
      search: [null],
    });
  }

  ngOnInit() {
    this.isLoading = true;
    this.getData();

    this.filterForm.valueChanges.pipe(
      // debounceTime(100),
      switchMap(() => this.filterData())
    ).subscribe(filteredData => {
      this.dataSource.data = filteredData;
      this.dataSource.paginator = this.paginator;
    });
  }


  private updateGoButtonStatus() {
    const { fromDate, toDate } = this.filterForm.value;
    this.variables.isGoButtonDisabled = !(fromDate && toDate);
  }

  private getData() {
    this.api.allApplicanteList().subscribe(
      (res: any) => {
        this.applicant_list = res.results;
        this.dataSource.data = this.applicant_list;
        this.dataSource.paginator = this.paginator;
        this.displayAndChangeBoxesLengths();
        this.isLoading = false;
      },
      error => {
        this.toastr.error('Failed to fetch data', 'Error');
        this.isLoading = false;
      }
    );
  }

  addEndPointPath(base64String: string): SafeResourceUrl {
    return base64String ? environment.auw_api_url + base64String : '/assets/thumbnail.jpg';
  }

  redirectTo(id: string) {
    this.router.navigate(['/alt-uw/details/' + id]);
  }

  private filterData() {
    const { fromDate, toDate, status, search } = this.filterForm.value;
    return this.api.allApplicanteList().pipe(
      map((res: any) => {
        let filteredData = res.results;
        if (fromDate && toDate) {
          filteredData = filteredData.filter((item: any) => item.insertion_datetime >= this.fromDate && item.insertion_datetime <= this.toDate);
        }
        if (status) {
          filteredData = filteredData.filter((item: any) => item.stp_status === status);
        }
        if (search) {
          const searchText = search.trim().toLowerCase();
          filteredData = filteredData.filter((item: any) => 
            (item.full_name && item.full_name.toLowerCase().includes(searchText)) || 
            (item.application_id && item.application_id.toLowerCase().includes(searchText))
          ); 
        }
        return filteredData;
      })
    );
  }

  searchFilter(search: string) {
    this.filterForm.controls['search'].setValue(search);
    this.filterData().subscribe(filteredData => {
      this.dataSource.data = filteredData;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyDateFilter() {
    this.filterData().subscribe(filteredData => {
      this.dataSource.data = filteredData;
      this.dataSource.paginator = this.paginator;
    });
  }

  onStatusChange(status: string) {
    this.variables.status = status;
    this.applyFilters();
  }

  onPlanNameChange(planName: string) {
    this.variables.plan_name = planName;
    this.applyFilters();
  }

  applyFilters() {
    const selectedStatus = this.variables.status;
    if (selectedStatus) {
      this.filterData().subscribe(filteredData => {
        this.dataSource.data = filteredData;
        this.dataSource.paginator = this.paginator;
        this.displayAndChangeBoxesLengths();
      });
    }
  }

  displayAndChangeBoxesLengths() {
    const counts = {
      total: 0, totalAccept: 0, totalCancel: 0, totalReject: 0, totalRefer: 0, totalSTPPass: 0, totalSTPFail: 0, totalPending: 0
    };

    for (const item of this.dataSource.data) {
      counts.total++;
      switch (item.stp_status) {
        case 'accept': counts.totalAccept++; break;
        case 'reject': counts.totalReject++; break;
        case 'STP': counts.totalSTPPass++; break;
        case 'NSTP': counts.totalSTPFail++; break;
        case 'cancel': counts.totalCancel++; break;
        case 'pending': counts.totalPending++; break;
      }
    }

    this.variables.totalCounts = counts;
  }

  clearAllFields() {
    this.filterForm.reset();
    this.document.location.reload();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
