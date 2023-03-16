import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  featuredProducts=[
    {source:'/assets/featured2.PNG' , name:'Potatos 1kg' , category:'Vegetables' , rater:'By Mr.food' , price:'14.99' , moneyOfferPrice:'10'},
    {source:'/assets/featured1.PNG' , name:'Redish 500g' , category:'Vegetables' , rater:'By Mr.food' , price:'12' ,moneyOfferPrice:'8'},
    {source:'/assets/featured2.PNG' , name:'Potatos 1kg' , category:'Vegetables' , rater:'By Mr.food' , price:'14.99',moneyOfferPrice:'10'},
    {source:'/assets/featured3.PNG' , name:'Tomatos 200g' , category:'Vegetables' , rater:'By Mr.food' , price:'12.99',moneyOfferPrice:'10'},
    {source:'/assets/featured4.PNG' , name:'Broccoli 1kg' , category:'Vegetables' , rater:'By Mr.food' , price:'10.99',moneyOfferPrice:'10'},
    {source:'/assets/featured1.PNG' , name:'Redish 500g' , category:'Vegetables' , rater:'By Mr.food' , price:'12',moneyOfferPrice:'10'},
    {source:'/assets/featured5.PNG' , name:'Beans 250g' , category:'Vegetables' , rater:'By Mr.food' , price:'19.99',moneyOfferPrice:'10'},
    {source:'/assets/featured1.PNG' , name:'Redish 500g' , category:'Vegetables' , rater:'By Mr.food' , price:'12',moneyOfferPrice:'10'},
    {source:'/assets/featured1.PNG' , name:'Redish 500g' , category:'Vegetables' , rater:'By Mr.food' , price:'12',moneyOfferPrice:'10'},
    {source:'/assets/featured3.PNG' , name:'Tomatos 200g' , category:'Vegetables' , rater:'By Mr.food' , price:'12.99',moneyOfferPrice:'10'},
    {source:'/assets/featured3.PNG' , name:'Tomatos 200g' , category:'Vegetables' , rater:'By Mr.food' , price:'12.99',moneyOfferPrice:'10'},
    {source:'/assets/featured2.PNG' , name:'Potatos 1kg' , category:'Vegetables' , rater:'By Mr.food' , price:'14.99',moneyOfferPrice:'10'},
  ]
}
