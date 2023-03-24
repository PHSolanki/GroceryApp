import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';;

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  featuredProducts=[
    {source:'/assets/featured2.PNG' , name:'Potatos 1kg' , category:'Vegetables' , rater:'By Mr.food' , price:'14.99' , moneyOfferPrice:'10'},
    {source:'/assets/topsells1.PNG' , name:'Orange 500g' , category:'Fruits' , rater:'By Mr.food' , price:'12' ,moneyOfferPrice:'8'},
    {source:'/assets/featured2.PNG' , name:'Potatos 1kg' , category:'Vegetables' , rater:'By Mr.food' , price:'14.99',moneyOfferPrice:'10'},
    {source:'/assets/topsells1.PNG' , name:'Orange 500g' , category:'Fruits' , rater:'By Mr.food' , price:'12.99',moneyOfferPrice:'10'},
    {source:'/assets/featured4.PNG' , name:'Broccoli 1kg' , category:'Vegetables' , rater:'By Mr.food' , price:'10.99',moneyOfferPrice:'10'},
    {source:'/assets/topsells1.PNG' , name:'Orange 500g' , category:'Fruits' , rater:'By Mr.food' , price:'12',moneyOfferPrice:'10'},
    {source:'/assets/featured5.PNG' , name:'Beans 250g' , category:'Vegetables' , rater:'By Mr.food' , price:'19.99',moneyOfferPrice:'10'},
    {source:'/assets/topsells1.PNG' , name:'Orange 500g' , category:'Fruits' , rater:'By Mr.food' , price:'12',moneyOfferPrice:'10'},
    {source:'/assets/featured1.PNG' , name:'Redish 500g' , category:'Vegetables' , rater:'By Mr.food' , price:'12',moneyOfferPrice:'10'},
    {source:'/assets/topsells1.PNG' , name:'Orange 500g' , category:'Fruits' , rater:'By Mr.food' , price:'12.99',moneyOfferPrice:'10'},
    {source:'/assets/featured3.PNG' , name:'Tomatos 200g' , category:'Vegetables' , rater:'By Mr.food' , price:'12.99',moneyOfferPrice:'10'},
    {source:'/assets/topsells1.PNG' , name:'Orange 500gg' , category:'Fruits' , rater:'By Mr.food' , price:'14.99',moneyOfferPrice:'10'},
  ]

  category: any;

  constructor(private route:ActivatedRoute) { }

  ProductListShow(){
    this.route.paramMap.subscribe(params => {
      // Read category parameter from URL
      const categoryOnRoute = params.get('category');
      console.log(categoryOnRoute)
      if (categoryOnRoute=='all') {
        // Filter products array based on category
        console.log(this.featuredProducts)
        this.category='Fruits And Vegetables'
        return this.featuredProducts
      }else{
        this.featuredProducts = this.featuredProducts.filter(featuredProducts => featuredProducts.category === categoryOnRoute);
        this.category=categoryOnRoute
        return this.featuredProducts
      }
    });
}
}
