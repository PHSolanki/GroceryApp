import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  

  navCategories=[
    {name:'All'},
    {name:'Vegetables'},
    {name:'Fruits'},
    {name:'Coffee And Teas'},
    {name:'Meat'}
  ]

  carouselSlide=[
    {source: 'assets/Carousel-slide1.jpg'},
    {source: 'assets/Carousel-slide2.jpg'},
    {source: 'assets/Carousel-slide3.jpg'},
  ]


  productsArray=[
    {id:1, source:'/assets/featured2.PNG' , quantity:1, name:'Potatos' , category:'Vegetables' , rater:'By Mr.food' , price:'14.99' , moneyOfferPrice:'10'},
    {id:2, source:'/assets/topsells1.PNG' , quantity:1, name:'Orange ' , category:'Fruits' , rater:'By Mr.food' , price:'12' ,moneyOfferPrice:'8'},
    {id:3, source:'/assets/featured2.PNG' , quantity:1, name:'Potatos' , category:'Vegetables' , rater:'By Mr.food' , price:'14.99',moneyOfferPrice:'10'},
    {id:4, source:'/assets/topsells1.PNG' , quantity:1, name:'Orange ' , category:'Fruits' , rater:'By Mr.food' , price:'12.99',moneyOfferPrice:'10'},
    {id:5, source:'/assets/featured4.PNG' , quantity:1, name:'Broccoli' , category:'Vegetables' , rater:'By Mr.food' , price:'10.99',moneyOfferPrice:'10'},
    {id:6, source:'/assets/topsells1.PNG' , quantity:1, name:'Orange ' , category:'Fruits' , rater:'By Mr.food' , price:'12',moneyOfferPrice:'10'},
    {id:7, source:'/assets/featured5.PNG' , quantity:1, name:'Beans ' , category:'Vegetables' , rater:'By Mr.food' , price:'19.99',moneyOfferPrice:'10'},
    {id:8, source:'/assets/topsells1.PNG' , quantity:1, name:'Orange ' , category:'Fruits' , rater:'By Mr.food' , price:'12',moneyOfferPrice:'10'},
    {id:9, source:'/assets/featured1.PNG' , quantity:1, name:'Redish ' , category:'Vegetables' , rater:'By Mr.food' , price:'12',moneyOfferPrice:'10'},
    {id:10, source:'/assets/topsells1.PNG' , quantity:1, name:'Orange ' , category:'Fruits' , rater:'By Mr.food' , price:'12.99',moneyOfferPrice:'10'},
    {id:11, source:'/assets/featured3.PNG' , quantity:1, name:'Tomatos ' , category:'Vegetables' , rater:'By Mr.food' , price:'12.99',moneyOfferPrice:'10'},
    {id:12, source:'/assets/topsells1.PNG' , quantity:1, name:'Orange ' , category:'Fruits' , rater:'By Mr.food' , price:'14.99',moneyOfferPrice:'10'}
  ]


 topsells=[
  {name:'Orange 1kg' , source:'assets/topsells1.PNG' , price:'2' },
  {name:'Orange 1kg' , source:'assets/topsells2.PNG' , price:'4' },
  {name:'Orange 1kg' , source:'assets/topsells1.PNG' , price:'6' }
 ]

 toprated=[
  {name:'Orange 1kg' , source:'assets/topsells2.PNG' , price:'6' },
  {name:'Orange 1kg' , source:'assets/topsells1.PNG' , price:'5' },
  {name:'Orange 1kg' , source:'assets/topsells2.PNG' , price:'3' }
 ]

 trendingItems=[
  {name:'Orange 1kg' , source:'assets/topsells1.PNG' , price:'10' },
  {name:'Orange 1kg' , source:'assets/topsells2.PNG' , price:'15' },
  {name:'Orange 1kg' , source:'assets/topsells1.PNG' , price:'13' }
 ]

recentlyAdded=[
  {name:'Orange 1kg' , source:'assets/topsells2.PNG' , price:'20' },
  {name:'Orange 1kg' , source:'assets/topsells1.PNG' , price:'1' },
  {name:'Orange 1kg' , source:'assets/topsells2.PNG' , price:'5' }
]


 features=[
  {title:'Best deals & prices',source:'assets/Capture1.PNG' ,description:'Don t miss our daily amazing deals and prices'},
  {title:'Refundable',source:'assets/Capture2.PNG' ,description:'If your items have damagewe agree to refund it'},
  {title:'Free delivery',source:'assets/Capture3.PNG' ,description:'Do purchase over $50 and get free delivery anywhere'}
 ]
}
