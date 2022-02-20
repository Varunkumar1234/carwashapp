import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookcomponentComponent } from './bookcomponent/bookcomponent.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { RegistercomponentComponent } from './registercomponent/registercomponent.component';
import { UpdatedeletecomponentComponent } from './updatedeletecomponent/updatedeletecomponent.component';
import { ViewcomponentComponent } from './viewcomponent/viewcomponent.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomecomponentComponent },
  { path: 'Bookservices', component: BookcomponentComponent },
  { path: 'login', component: LogincomponentComponent },
  { path: 'register', component: RegistercomponentComponent },
  { path: 'view', component: ViewcomponentComponent },
  { path: 'updatedelete', component: UpdatedeletecomponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
