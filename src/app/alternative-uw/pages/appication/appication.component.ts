import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Variables, createVariables } from './constants';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { DOCUMENT } from '@angular/common';
import { LoaderService } from "../../../services/loader.service";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';


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
  isLoading: boolean;
  pipe: DatePipe;
  filterForm: FormGroup;
  tomorrow = new Date(); // disable future date
  applicant_list: any = [];
  creationData: any;
  photoPath: any;

  get fromDate() {
    return moment(this.filterForm.get('fromDate').value).format('YYYY-MM-DD')
  }
  get toDate() {
    return moment(this.filterForm.get('toDate').value).format('YYYY-MM-DD');
  }

  constructor(
    public _api: ApiService,
    public router: Router,
    private formBuilder: FormBuilder,
    public _loader: LoaderService,
    @Inject(DOCUMENT) private document: Document,
    private toastr:ToastrService,
    private _sanitizer: DomSanitizer) {

    this.tomorrow.setDate(this.tomorrow.getDate() + 0); // disable future dates

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
    this.filterForm.valueChanges.subscribe(() => {
      this.updateGoButtonStatus();
    });
  }

  private updateGoButtonStatus() {
    const fromDateValue = this.filterForm.get('fromDate').value;
    const toDateValue = this.filterForm.get('toDate').value;

    // Check conditions and update 'isGoButtonDisabled' accordingly
    if (fromDateValue && toDateValue) {
      this.variables.isGoButtonDisabled = false;
    } else {
      this.variables.isGoButtonDisabled = true;
      this.variables.isButtonDisabled = false;
    }
  }

 
  getData() {
    this._api.allApplicanteList().subscribe((res: any) => {
      this.applicant_list = res.results;
      this.dataSource.data = this.applicant_list;
      this.dataSource.paginator = this.paginator;
      // dynamically change the 5 boxes lengths
      this.displayAndChangeBoxesLengths()
    })
    this.isLoading = false
  }
  // code close

  addEndPointPath(base64String: string): SafeResourceUrl {
    if (base64String) {
      return base64String = environment.auw_api_url + base64String
    } else {
      return '/assets/thumbnail.jpg';
    }
  }

  redirectTo(id) {
    this.router.navigate(['/alt-uw/details/' + id])
  }

  searchText: string;

  //Search in filter code
  searchFilter(filterValue: any): void {

    console.log('search', this.dataSource.filteredData)
    this.searchText = filterValue.trim().toLowerCase();

    if (this.searchText.length > 0 && this.toDate != 'Invalid date' && this.fromDate != 'Invalid date' && this.variables.status.length > 0) {
      console.log("searchText is not blank blank");
      const filteredResults = this.applicant_list.filter(obj => obj.insertion_datetime >= this.fromDate && obj.insertion_datetime <= this.toDate);
      this.filteredData = filteredResults;
      const filteredBooks = this.filteredData.filter(val => val.stp_status.includes(this.variables.status));
      this.dataSource.data = filteredBooks;
      console.log('filteredBooks', filteredBooks)
      this.dataSource = filteredBooks.filter((item: any) => {
        console.log('b')
        const fullName = item.full_name ? item.full_name.toLowerCase() : '';
        const applicationId = item.application_id ? item.application_id.toLowerCase() : '';
        return fullName.includes(this.searchText) || applicationId.includes(this.searchText);
      });

  }
   else if (this.searchText === '' && this.toDate != 'Invalid date' && this.fromDate != 'Invalid date' && this.variables.status.length > 0) {
   console.log('else if')
   const filteredResults = this.applicant_list.filter(obj => obj.insertion_datetime >= this.fromDate && obj.insertion_datetime <= this.toDate);
   this.filteredData = filteredResults;
   const filteredBooks = this.filteredData.filter(val => val.stp_status.includes(this.variables.status));
      this.dataSource.data = filteredBooks;
      console.log('filteredBooks', filteredBooks)
      this.dataSource = filteredBooks.filter((item: any) => {
        console.log('b')
        const fullName = item.full_name ? item.full_name.toLowerCase() : '';
        const applicationId = item.application_id ? item.application_id.toLowerCase() : '';
        return fullName.includes(this.searchText) || applicationId.includes(this.searchText);
      });

      this.dataSource.filter = '' + Math.random();
    this.dataSource.paginator = this.paginator   


      console.log("date not blank");


  } 
  else { if(!this.searchText?.length){

      this.dataSource.filter = this.searchText;
      this.dataSource.filterPredicate = (data: any, filter: string) => {
        const fullName = data.full_name ? data.full_name.toLowerCase() : '';
        const applicationId = data.application_id ? data.application_id.toLowerCase() : '';
        return (
          fullName.includes(filter) ||
          applicationId.includes(filter)
        );
      };
        console.log("when search is blank");
    }
    this.dataSource.filter = this.searchText;
      this.dataSource.filterPredicate = (data: any, filter: string) => {
        const fullName = data.full_name ? data.full_name.toLowerCase() : '';
        const applicationId = data.application_id ? data.application_id.toLowerCase() : '';
        return (
          fullName.includes(filter) ||
          applicationId.includes(filter)
        );
      };
        console.log("when search is blank");
        this.dataSource.filter = '' + Math.random();
    this.dataSource.paginator = this.paginator

  }

  }

  // date filter
  applyDateFilter() {

    
    this.pipe = new DatePipe('en');
    this.dataSource.filterPredicate = (data, filter) => {
      if (this.fromDate && this.toDate) {
        this.variables.isGoButtonDisabled = false;
        data.insertion_datetime = moment(data.insertion_datetime).format('YYYY-MM-DD');

        return data.insertion_datetime >= this.fromDate && data.insertion_datetime <= this.toDate;
      }
      return true;
    }

    this.dataSource.filter = '' + Math.random();
    this.dataSource.paginator = this.paginator

    

  }

  // by status or by plan Name filter code

  onStatusChange(status: string) {
    this.variables.status = status;
    if(this.toDate != 'Invalid date' && this.fromDate != 'Invalid date' && this.variables.status.length > 0){
      if(this.variables.status && this.toDate && this.fromDate){
        this.pipe = new DatePipe('en');
      this.dataSource.filterPredicate = (data, filter) => {
        if (this.fromDate && this.toDate) {


          this.filteredData = [...this.applicant_list];
          const filteredResults = this.applicant_list.filter(obj => obj.insertion_datetime >= this.fromDate && obj.insertion_datetime <= this.toDate);

        this.filteredData = this.filterBySTPStatus(this.variables.status, filteredResults);
        this.dataSource = new MatTableDataSource(this.filteredData);
        
        this.variables.isGoButtonDisabled = false;
        data.insertion_datetime = moment(data.insertion_datetime).format('YYYY-MM-DD');
        
        return data.insertion_datetime >= this.fromDate && data.insertion_datetime <= this.toDate;
      }
      return true;
    }
    this.dataSource.filter = '' + Math.random();
    this.dataSource.paginator = this.paginator   
      
 
      }
      if(!this.dataSource.data?.length){
        this.dataSource = this.applicant_list; 
            this.toastr.error('Data not present with this combination of filters', '! Refreshing', {              
                timeOut: 8000,
                positionClass: 'toast-top-right',
              }
            );
            this.dataSource.filter = '' + Math.random();
            this.dataSource.paginator = this.paginator   
      }
    }
    else{
      this.applyFilters();
    }
   
  }

  onPlanNameChange(planName: string) {
    this.variables.plan_name = planName;
    this.applyFilters();
  }
  filteredData: any;
  applyFilters() {
    const selectedStatus = this.variables.status;
    // const selectedPlanName = this.variables.plan_name;
    if (selectedStatus) {
      this.filteredData = [...this.applicant_list];
      this.filteredData = this.filterBySTPStatus(selectedStatus, this.filteredData);
    }
    // if (selectedPlanName) {
    //   this.filteredData = this.filterByPlanName(selectedPlanName, this.filteredData);
    // }
    this.dataSource = new MatTableDataSource(this.filteredData);
    this.dataSource.paginator = this.paginator

    this.variables.isButtonDisabled = false;

    // dynamically change the 4 boxes fun
    this.displayAndChangeBoxesLengths();

  }

  filterBySTPStatus(status: string, data: any[]) {
    return data.filter(e => e.stp_status === status);
  }

  // filterByPlanName(planName: string, data: any[]) {
  //   return data.filter(e => e.plan_name === planName);
  // }
  // code close

  // dynamically change the 4 boxes lengths
  displayAndChangeBoxesLengths() {
    this.variables.totalCounts.total = this.dataSource.data.length;
    this.variables.totalCounts.totalAccept = 0;
    this.variables.totalCounts.totalCancel = 0;
    this.variables.totalCounts.totalReject = 0;
    this.variables.totalCounts.totalRefer = 0;
    this.variables.totalCounts.totalSTPPass = 0;
    this.variables.totalCounts.totalSTPFail = 0;
    this.variables.totalCounts.totalPending = 0;


    for (const item of this.dataSource.filteredData) {
      switch (item.stp_status) {
        case 'accept':
          this.variables.totalCounts.totalAccept++;
          break;
        case 'reject':
          this.variables.totalCounts.totalReject++;
          break;
        case 'STP':
          this.variables.totalCounts.totalSTPPass++;
          break;
        case 'NSTP':
          this.variables.totalCounts.totalSTPFail++;
          break;
        case 'cancel':
          this.variables.totalCounts.totalCancel++;
          break;
        case 'pending':
          this.variables.totalCounts.totalPending++;
          break;
      }
    }
  }

  // Clear the values in the form
  clearAllFields() {
    ['fromDate', 'toDate', 'status', 'planName', 'search'].forEach(c => {
      this.filterForm.get(c).setValue(null)
    });
    this.document.location.reload()
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }


}