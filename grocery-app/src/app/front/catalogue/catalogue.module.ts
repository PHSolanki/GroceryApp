import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from '../home/home.component';


@NgModule({
  declarations: [
 
  
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule
  ]
})
export class CatalogueModule { }
