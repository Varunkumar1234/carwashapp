import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Apiservice } from '../app.service';

@Component({
  selector: 'app-viewcomponent',
  templateUrl: './viewcomponent.component.html',
  styleUrls: ['./viewcomponent.component.css']
})
export class ViewcomponentComponent implements OnInit {
  errormessage: any;
  carwashForm: FormGroup;
  Transactionid: String = '';
  username: string = '';
  constructor(
    public fb: FormBuilder,
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
      bookingstatus: [''],
      Transactionid: [''],
      SlotNo: [''],
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
      this.carwashForm.controls['bookingstatus'].setValue(data.bookingstatus);
      this.carwashForm.controls['Transactionid'].setValue(data.transid);
      this.carwashForm.controls['SlotNo'].setValue(data.slotnumber);
      this.carwashForm.controls['phoneno'].setValue(data.phoneno);
      this.carwashForm.controls['email'].setValue(data.email);
      this.errormessage = data.message;
    });
  }
}
