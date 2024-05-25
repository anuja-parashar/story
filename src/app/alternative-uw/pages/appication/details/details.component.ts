import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { Common, OverviewDesignModel, applicantBasicDetails } from '../../../../models/common';
import { GenralConfig } from '../../../../config/config';
import { environment } from '../../../../../environments/environment';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  nav_tabs: any;
  isLoading: boolean;
  common = new Common()
  applicantDetails:any = [];
  overviewDesignModel = new OverviewDesignModel()

  api_url = environment.auw_api_url
  constructor(
    public _api: ApiService,
    private router: Router,
    private _sanitizer: DomSanitizer,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.isLoading = true
    let url = location.href
    let urlArr = url.split('/')
    if (!urlArr[5]) {
      this.router.navigate['/alt-uw']
    }
    this.common.applicationId = urlArr[5];
    localStorage.setItem('applicationId', this.common.applicationId )
    this.nav_tabs = GenralConfig.altUWTabs
    this.getData()
  }
  
  fedoVitalsData:any;
  photoPath:any;
  getData() {
    this._api.FedoVitalsData(this.common.applicationId).subscribe((res: any) => {
      this.photoPath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + res?.vital_data?.fedo_face_base64);
    });
    this.overviewDesignModel.addresses = []
    this._api.persnolDetailsApplicants(this.common.applicationId).subscribe((res: any) => {
      this.applicantDetails = res;
      if (this.applicantDetails?.personal_data.age == " " && this.applicantDetails?.personal_data.dob) {
        this.overviewDesignModel.age = this.yearsDiff(this.applicantDetails?.personal_data.dob)
      } else {
        this.overviewDesignModel.age = this.yearsDiff(this.applicantDetails?.personal_data.dob)
      }
    });
   
    this.isLoading = false
  }

  yearsDiff(d1) {
    let date1 = new Date(d1);
    let date2 = new Date();
    // let date2 = new Date(d2);
    let yearsDiff = date2.getFullYear() - date1.getFullYear();
    return yearsDiff;
  }


}
