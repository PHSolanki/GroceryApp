import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CategoryComponent } from '../catalogue/category/category.component';


@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
