import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../app.service';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {

  constructor(
    private apiservice: Apiservice
  ) { }

  username: String = '';
  password: String = '';
  errormessage: String = '';

  ngOnInit(): void {
  }

  login() {
    this.apiservice.login(this.username, this.password).subscribe(
      data => {
        console.log(data);
        console.log(data.message);
        this.errormessage = data.message;
        if (data.status == 'success') {
          localStorage.setItem('username', String(this.username));
        }
        else {
          localStorage.setItem('username', '');
        }
      }
    )
  }

}
