import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-alternative-uw',
  templateUrl: './alternative-uw.component.html',
  styleUrls: ['./alternative-uw.component.css']
})
export class AlternativeUwComponent implements OnInit {

  currentUrl: string;


  constructor(private router: Router, private location: Location) { 

    this.currentUrl = this.location.path();
  }

  ngOnInit() {

    // if(!localStorage.getItem('AuthenticationKey')){
    //   this.router.navigate(['/']);
    // }else{
    //   this.router.navigate([this.currentUrl]);
    // }
  }

}
