import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './catalogue/category/category.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [

    
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    FormsModule
  ]
})
export class FrontModule { }
