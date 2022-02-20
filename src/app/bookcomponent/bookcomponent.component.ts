import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Apiservice } from '../app.service';

@Component({
  selector: 'app-bookcomponent',
  templateUrl: './bookcomponent.component.html',
  styleUrls: ['./bookcomponent.component.css']
})
export class BookcomponentComponent implements OnInit {
  errormessage: String = '';
  carwashForm: FormGroup;
  bookingservicelist = [
    "Simple Car Wash", "Premium Car wash", "Car Coating", "Wax Polish", "Super Saver wash"
  ];

  constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiservice: Apiservice) {
    this.mainForm();
  }

  ngOnInit(): void {
    if (localStorage.getItem("username") == '') {
      alert("Login or register to book services")
      window.location.href = '/login';
    }
  }

  mainForm() {
    this.carwashForm = this.fb.group({

      username: [localStorage.getItem("username")],
      custname: [localStorage.getItem("custname")],
      bookingdate: [''],
      bookingservice: [''],
      bookingstarttime: [''],
      vehiclemodel: [''],
      email: [''],
      phoneno: ['']
    })
  }


  // Choose designation with select dropdown
  updateProfile(e) {
    console.log(e.target.value);
    this.bookingservice.setValue(e.target.value, {
      onlySelf: true
    });
  }

  get bookingservice() {
    return this.carwashForm.get('bookingservice');
  }



  onSubmit() {
    this.apiservice.CreateData(this.carwashForm.value).subscribe(
      data => {
        console.log(data.message);
        this.errormessage = data.message;
      }
    )
  }

}
