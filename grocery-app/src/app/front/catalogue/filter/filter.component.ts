import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  selectedValue:any ='all'

  @Output()
  selectCategory : EventEmitter<any> = new EventEmitter<any>()

  getCategory(){
    this.selectCategory.emit(this.selectedValue)
    // console.log(this.selectedValue) 
  }
}
