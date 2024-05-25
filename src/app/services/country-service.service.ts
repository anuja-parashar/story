import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {
  
  currentCountry : any;
  constructor() {
    let country : any = localStorage.getItem("selectedCountry");
    if(country) {
      this.currentCountry = country;
    }
    console.log(this.currentCountry);
   }

  setCountry(value:any) {
    this.currentCountry = value;
    localStorage.setItem("selectedCountry",this.currentCountry);
  }
  getCountry() {
    return this.currentCountry;
  }
  getLogoAndCurrency() {
    if(this.currentCountry) {
      if(this.currentCountry === 'India') {
        return { logo : 'ic_user_1.svg',currency : '₹',country:'India'};
      }
      else if(this.currentCountry === 'UAE') {
        // return { logo : 'telogo.png',currency : 'AED',country :'UAE'};
        return { logo : 'MSH logo.jpg',currency : 'AED',country :'UAE'};
      }
      else if(this.currentCountry === 'KSA') {
        return { logo : 'tlogo.svg',currency : 'SAR',country : 'KSA'};
      }
      else if(this.currentCountry === 'Egypt') {
        return { logo : 'Logo gig 1.png',currency : 'EGP',country : 'Egypt'};
      }
      else {
        return null;
      }
    }
    else {
      return null;
    }
  }
}
