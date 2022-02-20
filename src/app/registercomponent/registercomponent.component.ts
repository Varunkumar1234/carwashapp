import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apiservice } from '../app.service';

@Component({
  selector: 'app-registercomponent',
  templateUrl: './registercomponent.component.html',
  styleUrls: ['./registercomponent.component.css']
})
export class RegistercomponentComponent implements OnInit {

  constructor(private apiservice: Apiservice) { }

  ngOnInit(): void {
  }

  username: String = '';
  custname: String = '';
  password: String = '';
  errormessage: String = '';

  register() {
    this.apiservice.register(this.username, this.custname, this.password).subscribe(
      data => {
        console.log(data.message);
        this.errormessage = data.message;
      }
    )
    localStorage.setItem('username', String(this.username))
    window.location.href = '/home';
  }

}
