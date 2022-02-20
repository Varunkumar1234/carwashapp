import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'carwashapp';
  submitted: boolean = false;
  usernamed: String = '';

  ngOnInit(): void {
    this.usernamed = localStorage.getItem("username");
    if (this.usernamed == '') {
      this.submitted = false;
    }
    else {
      this.submitted = true;
    }
  }

  logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("custname");
    window.location.href = '/home';
  }

}
