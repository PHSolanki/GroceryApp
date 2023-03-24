import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  constructor(private route:ActivatedRoute){  }

  productsArray=[
    {id:1, source:'/assets/featured2.PNG' , name:'Potatos 1kg' , category:'Vegetables' , rater:'By Mr.food' , price:'14.99' , moneyOfferPrice:'10'},
    {id:2, source:'/assets/topsells1.PNG' , name:'Orange 500g' , category:'Fruits' , rater:'By Mr.food' , price:'12' ,moneyOfferPrice:'8'},
    {id:3, source:'/assets/featured2.PNG' , name:'Potatos 1kg' , category:'Vegetables' , rater:'By Mr.food' , price:'14.99',moneyOfferPrice:'10'},
    {id:4, source:'/assets/topsells1.PNG' , name:'Orange 500g' , category:'Fruits' , rater:'By Mr.food' , price:'12.99',moneyOfferPrice:'10'},
    {id:5, source:'/assets/featured4.PNG' , name:'Broccoli 1kg' , category:'Vegetables' , rater:'By Mr.food' , price:'10.99',moneyOfferPrice:'10'},
    {id:6, source:'/assets/topsells1.PNG' , name:'Orange 500g' , category:'Fruits' , rater:'By Mr.food' , price:'12',moneyOfferPrice:'10'},
    {id:7, source:'/assets/featured5.PNG' , name:'Beans 250g' , category:'Vegetables' , rater:'By Mr.food' , price:'19.99',moneyOfferPrice:'10'},
    {id:8, source:'/assets/topsells1.PNG' , name:'Orange 500g' , category:'Fruits' , rater:'By Mr.food' , price:'12',moneyOfferPrice:'10'},
    {id:9, source:'/assets/featured1.PNG' , name:'Redish 500g' , category:'Vegetables' , rater:'By Mr.food' , price:'12',moneyOfferPrice:'10'},
    {id:10, source:'/assets/topsells1.PNG' , name:'Orange 500g' , category:'Fruits' , rater:'By Mr.food' , price:'12.99',moneyOfferPrice:'10'},
    {id:11, source:'/assets/featured3.PNG' , name:'Tomatos 200g' , category:'Vegetables' , rater:'By Mr.food' , price:'12.99',moneyOfferPrice:'10'},
    {id:12, source:'/assets/topsells1.PNG' , name:'Orange 500gg' , category:'Fruits' , rater:'By Mr.food' , price:'14.99',moneyOfferPrice:'10'},
  ]

  

}
