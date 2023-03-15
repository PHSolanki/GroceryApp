import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  constructor(private router:Router){}
  food: any;
  categories=[
    {name: 'Fruits' , num_of_items:'20 ', source : 'assets/fruits.jpg' },
    {name: 'Vegetables' , num_of_items:'25', source : 'assets/vegetables.jpg' },
    {name: 'Coffee' , num_of_items:'27 ', source : 'assets/coffee.jpg' },
    {name: 'Tea' , num_of_items:'10 ', source : 'assets/tea.jpg' },
    {name: 'Meat' , num_of_items:'30 ', source : 'assets/meat.jpg' },

   ]

}
