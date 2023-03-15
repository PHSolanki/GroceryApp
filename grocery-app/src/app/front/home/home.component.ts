import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  carouselSlide=[
    {source: 'assets/Carousel-slide1.jpg'},
    {source: 'assets/Carousel-slide2.jpg'},
    {source: 'assets/Carousel-slide3.jpg'},
  ]


featuredProducts=[
  {source:'assets/featured2.PNG' , name:'Potatos 1kg' , category:'Vegetables' , rater:'By Mr.food' , price:'14,99'},
  {source:'assets/featured1.PNG' , name:'Redish 500g' , category:'Vegetables' , rater:'By Mr.food' , price:'9,99'},
  {source:'assets/featured2.PNG' , name:'Potatos 1kg' , category:'Vegetables' , rater:'By Mr.food' , price:'14,99'},
  {source:'assets/featured3.PNG' , name:'Tomatos 200g' , category:'Vegetables' , rater:'By Mr.food' , price:'12,99'},
  {source:'assets/featured4.PNG' , name:'Broccoli 1kg' , category:'Vegetables' , rater:'By Mr.food' , price:'10,99'},
  {source:'assets/featured1.PNG' , name:'Redish 500g' , category:'Vegetables' , rater:'By Mr.food' , price:'9,99'},
  {source:'assets/featured5.PNG' , name:'Beans 250g' , category:'Vegetables' , rater:'By Mr.food' , price:'19,99'},
  {source:'assets/featured1.PNG' , name:'Redish 500g' , category:'Vegetables' , rater:'By Mr.food' , price:'9,99'}
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