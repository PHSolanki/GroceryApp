import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  constructor(private activatedroute:ActivatedRoute ){  }

  value:any;

  productsArray=[
    {id:1, source:'/assets/featured2.PNG' , quantity:1 , name:'Potatos' , category:'Vegetables' , rater:'By Mr.food' , price:'14.99' , moneyOfferPrice:'10'},
    {id:2, source:'/assets/topsells1.PNG' , quantity:1 , name:'Orange ' , category:'Fruits' , rater:'By Mr.food' , price:'12' ,moneyOfferPrice:'8'},
    {id:3, source:'/assets/featured2.PNG' , quantity:1 , name:'Potatos' , category:'Vegetables' , rater:'By Mr.food' , price:'14.99',moneyOfferPrice:'10'},
    {id:4, source:'/assets/topsells1.PNG' , quantity:1 , name:'Orange ' , category:'Fruits' , rater:'By Mr.food' , price:'12.99',moneyOfferPrice:'10'},
    {id:5, source:'/assets/featured4.PNG' , quantity:1 , name:'Broccoli' , category:'Vegetables' , rater:'By Mr.food' , price:'10.99',moneyOfferPrice:'10'},
    {id:6, source:'/assets/topsells1.PNG' , quantity:1 , name:'Orange ' , category:'Fruits' , rater:'By Mr.food' , price:'12',moneyOfferPrice:'10'},
    {id:7, source:'/assets/featured5.PNG' , quantity:1 , name:'Beans ' , category:'Vegetables' , rater:'By Mr.food' , price:'19.99',moneyOfferPrice:'10'},
    {id:8, source:'/assets/topsells1.PNG' , quantity:1 , name:'Orange ' , category:'Fruits' , rater:'By Mr.food' , price:'12',moneyOfferPrice:'10'},
    {id:9, source:'/assets/featured1.PNG' , quantity:1 , name:'Redish ' , category:'Vegetables' , rater:'By Mr.food' , price:'12',moneyOfferPrice:'10'},
    {id:10, source:'/assets/topsells1.PNG' , quantity:1 , name:'Orange ' , category:'Fruits' , rater:'By Mr.food' , price:'12.99',moneyOfferPrice:'10'},
    {id:11, source:'/assets/featured3.PNG' , quantity:1 , name:'Tomatos ' , category:'Vegetables' , rater:'By Mr.food' , price:'12.99',moneyOfferPrice:'10'},
    {id:12, source:'/assets/topsells1.PNG' , quantity:1 , name:'Orange ' , category:'Fruits' , rater:'By Mr.food' , price:'14.99',moneyOfferPrice:'10'}
  ]

  product: any;
  productId: any;

  ngOnInit(): void{
     this.productId = this.activatedroute.snapshot.paramMap.get('id');
     this.product= this.productsArray.find(x => x.id == this.productId)

  }

  getValue() {
    console.log(this.value);
  }

  increment(product: any){
    product.quantity=product.quantity+1;
    
  }

  decrement(product: any){
    if(product.quantity>1){
      product.quantity=product.quantity-1;
    }else{
      product.quantity=1
    }
  }

}
