import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { BookcomponentComponent } from './bookcomponent/bookcomponent.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { RegistercomponentComponent } from './registercomponent/registercomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewcomponentComponent } from './viewcomponent/viewcomponent.component';
import { UpdatedeletecomponentComponent } from './updatedeletecomponent/updatedeletecomponent.component';
@NgModule({
  declarations: [
    AppComponent,
    HomecomponentComponent,
    BookcomponentComponent,
    LogincomponentComponent,
    RegistercomponentComponent,
    ViewcomponentComponent,
    UpdatedeletecomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
