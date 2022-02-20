import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Apiservice } from '../app.service';

@Component({
  selector: 'app-updatedeletecomponent',
  templateUrl: './updatedeletecomponent.component.html',
  styleUrls: ['./updatedeletecomponent.component.css']
})
export class UpdatedeletecomponentComponent implements OnInit {
  errormessage: any;
  carwashForm: FormGroup;
  bookingservicelist = [
    "Simple Car Wash", "Premium Car wash", "Car Coating", "Wax Polish", "Super Saver wash"
  ];
  username: String = '';
  Transactionid: String = '';
  constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiservice: Apiservice) {
    this.mainForm();
  }

  ngOnInit(): void {
  }

  mainForm() {
    this.carwashForm = this.fb.group({

      username: [''],
      custname: [''],
      bookingdate: [''],
      bookingservice: [''],
      bookingstarttime: [''],
      vehiclemodel: [''],
      email: [''],
      phoneno: ['']
    })
  }



  getdata() {
    this.username = localStorage.getItem("username");
    this.apiservice.getbookingdetails(this.Transactionid).subscribe(data => {
      console.log(data);
      this.carwashForm.controls['username'].setValue(data.username);
      this.carwashForm.controls['custname'].setValue(data.custname);
      this.carwashForm.controls['bookingdate'].setValue(data.bookingdate);
      this.carwashForm.controls['bookingservice'].setValue(data.bookingservice);
      this.carwashForm.controls['bookingstarttime'].setValue(data.bookingstarttime);
      this.carwashForm.controls['vehiclemodel'].setValue(data.vehiclemodel);
      this.carwashForm.controls['phoneno'].setValue(data.phoneno);
      this.carwashForm.controls['email'].setValue(data.email);
      this.errormessage = data.message;
    });
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
    this.apiservice.Update(this.Transactionid, this.carwashForm.value).subscribe(
      data => {
        console.log(data.message);
        this.errormessage = data.message;
      }
    )
  }


  onDelete() {
    this.apiservice.delete(this.Transactionid).subscribe(
      data => {
        console.log(data.message);
        this.errormessage = data.message;
      }
    )
  }

}
