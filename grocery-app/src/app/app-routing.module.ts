import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { CategoryComponent } from './front/catalogue/category/category.component';
import { ProductDetailsComponent } from './front/catalogue/product-details/product-details.component';
import { ProductListComponent } from './front/catalogue/product-list/product-list.component';
import { LoginComponent } from './front/user/login/login.component';
import { RegistrationComponent } from './front/user/registration/registration.component';
import { UserProfileComponent } from './front/user/user-profile/user-profile.component';
import { HomeComponent } from './front/home/home.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'category' , component:CategoryComponent},
  {path:'product-list' , component:ProductListComponent},
  {path:'product-details' , component:ProductDetailsComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegistrationComponent},
  {path:'user-profile' , component:UserProfileComponent},
  {path: '' , component:HomeComponent},
  {path: '**' , component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
