import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { CategoryComponent } from './front/catalogue/category/category.component';
import { FilterComponent } from './front/catalogue/filter/filter.component';
import { ProductListComponent } from './front/catalogue/product-list/product-list.component';
import { HomeComponent } from './front/home/home.component';
 

const appRoute : Routes = [
  
]

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    CategoryComponent,
    ProductListComponent,
    FilterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
