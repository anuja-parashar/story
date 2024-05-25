import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  accessError: String = '';
  password: String = '';
  username: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.accessError = '';


  }

  login() {
    if (this.password === 'bir3rg32edu8hu38hd82h9') {
      localStorage.setItem('loggedin', 'bir3rg32edu8hu38hd82h9')
      this.router.navigate(['/alt-uw']);

    } else {
      this.password = '';
      this.accessError = 'Invalid Password';
    }
  }
}
