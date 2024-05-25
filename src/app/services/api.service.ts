import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

// import { CookieService } from 'ngx-cookie-service';


@Injectable({
    providedIn: 'root'
})

export class ApiService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    httpOptions3 = {
        headers: new HttpHeaders({})
    };


    // if (country == 'USA') {
    //   this.getDataUSA(this.currentPage)
    // } else {
    //   this.getData(this.currentPage)
    // }
    API_URL
 
    auw_api_url = environment.auw_api_url;
    // prashantAPI_URL = (environment.Api_url == '/kyc_api') ? environment.Api_url : environment.Api_url + ":" + environment.underwritingPort;
    // prashantAPI_URL = "http://35.247.191.10:" + environment.prashantPort;
    base = '/'

    // base = '/kyc_api/'
    constructor(
        private httpClient: HttpClient,
        // private cookieService: CookieService,
    ) {
        this.setApiUrl()
    }

    setApiUrl() {
       
    }

  
// new work start Altarnate uw work sheet

allApplicanteList() {
    this.setApiUrl();
    return this.httpClient.get(this.auw_api_url + `api/applicants`, {
        headers: new HttpHeaders({
        })
    })
}
// getApplicants(page: number): Observable<any> {
//     return this.http.get<any>(`${this.baseUrl}?pages=${page}`);
//   }

kycApplicantsList(id) {
    this.setApiUrl();
    return this.httpClient.get(this.auw_api_url +`api/ApplicantDetailsAPIView/${id}`, {
        headers: new HttpHeaders({
        })
    })
}
persnolDetailsApplicants(id) {
    this.setApiUrl();
    return this.httpClient.get(this.auw_api_url +`api/ApplicantPersonalAPIView/${id}`, {
        headers: new HttpHeaders({
        })
    })
}
applicantPhotoSignAPIView(id) {
    this.setApiUrl();
    return this.httpClient.get(this.auw_api_url +`api/ApplicantPhotoSignAPIView/${id}`, {
        headers: new HttpHeaders({
        })
    })
}

applicantNomineeDetailsAPIView(id) {
    this.setApiUrl();
    return this.httpClient.get(this.auw_api_url +`api/ApplicantNomineeDetailsAPIView/${id}`, {
        headers: new HttpHeaders({
        })
    })
}


mortalityAndSanitation(id){
    this.setApiUrl();
    return this.httpClient.get(this.auw_api_url +`api/Mortality_sanitation/${id}`, {
        headers: new HttpHeaders({
        })
    })
}
negativePincode(id){
    this.setApiUrl();
    return this.httpClient.get(this.auw_api_url +`api/NegativePincode/${id}`, {
        headers: new HttpHeaders({
        })
    })
}
ridersDetails(id){
    this.setApiUrl();
    return this.httpClient.get(this.auw_api_url +`api/ridersdetails/${id}`, {
        headers: new HttpHeaders({
        })
    })
}


//   getCityByPincode(pincode: any) {
//     return this.httpClient.get("https://api.postalpincode.in/pincode/" + pincode);
//   }

//   DESICIAN
newUWFeedbackSubmit(applicantId, data) {
    this.setApiUrl()
    return this.httpClient.post(this.auw_api_url +`api/FeedbackbyUnderwriter/` + applicantId, data, {
        headers: new HttpHeaders({})
    })
}
newUWFeedbackNewSubmit(applicantId, data) {
    this.setApiUrl()
    return this.httpClient.post(this.auw_api_url +`api/UnderwriterDecision/` + applicantId, data, {
        headers: new HttpHeaders({})
    })
}

newUWFeedbackNewSubmitget(applicantId) {
    this.setApiUrl()
    return this.httpClient.get(this.auw_api_url +`api/underwritterfeedrecieved/` + applicantId, {
        headers: new HttpHeaders({})
    })
}

uwcomment(applicantId, data) {
    this.setApiUrl()
    return this.httpClient.post(this.auw_api_url +`api/uwcomment/` + applicantId, data, {
        headers: new HttpHeaders({})
    })
}
worsheetriskcomment(applicantId, data) {
    this.setApiUrl()
    return this.httpClient.post(this.auw_api_url +`api/worsheetriskcomment/` + applicantId, data, {
        headers: new HttpHeaders({})
    })
}
AadharPhoto(applicantId) {
    this.setApiUrl()
    return this.httpClient.get(this.auw_api_url +`api/AadharPhoto/` + applicantId, {
        headers: new HttpHeaders({})
    })
}
PassFailValidation(applicantId) {
    this.setApiUrl()
    return this.httpClient.get(this.auw_api_url +`api/PassFailValidation/` + applicantId, {
        headers: new HttpHeaders({})
    })
}
PancardData(applicantId) {
    this.setApiUrl()
    return this.httpClient.get(this.auw_api_url +`api/PancardData/` + applicantId, {
        headers: new HttpHeaders({})
    })
}
FaceMatchPercantage(applicantId) {
    this.setApiUrl()
    return this.httpClient.get(this.auw_api_url +`api/FaceMatchPercantage/` + applicantId, {
        headers: new HttpHeaders({})
    })
}
FedoVitalsData(applicantId) {
    this.setApiUrl()
    return this.httpClient.get(this.auw_api_url +`api/FedoVitalsData/` + applicantId, {
        headers: new HttpHeaders({})
    })
}
FacePredictions(applicantId) {
    this.setApiUrl()
    return this.httpClient.get(this.auw_api_url +`api/FacePredictions/` + applicantId, {
        headers: new HttpHeaders({})
    })
}

s3_pivc_verify(applicantId) {
    this.setApiUrl()
    return this.httpClient.get(this.auw_api_url +`api/s3_pivc_verify/` + applicantId, {
        headers: new HttpHeaders({})
    })
}

}

