import { Lists } from './lists.model';
import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  ShirtPrizeNM = 250;
  ShirtPrizeOV = 300;
  firstEms = 50;
  otherEms = 20;

  lists: Lists[] = [
    new Lists(null, 1, true)
  ];

  total = 0;
  isEditSize = true;
  isEms = false;


  constructor() { }

  ngOnInit() {
    // console.log(this.lists);
  }

  getSize(size: string, index: number) {
    this.lists[index].edit = true;
    this.lists[index].size = size;
    if ( size === 'OV' ) {
      this.lists[index].edit = false;
      this.lists[index].size = '';
      console.log(this.isEditSize);
    }
    this.calPrice();
  }

  newOrder() {
    this.lists.push({
      size: null,
      amount: 1,
      edit: true
    });
  }

  rmOrder(index: number) {
    this.lists.splice(index, 1);
  }

  calPrice() {
    this.total = 0;
     let checkAmount = 0;
    this.lists.forEach( (list, index) => {
      if ( list.size != null && list.amount != null ) {
        if ( list.size === 'M' || list.size === 'L' || list.size === 'XL' ) {
          this.total += this.ShirtPrizeNM * +list.amount;
          checkAmount += +list.amount;
        } else {
          this.total += this.ShirtPrizeOV * +list.amount;
          checkAmount += +list.amount;
        }
      }
    });
    if ( this.isEms === true ) {
      for ( let i = 0 ; i < checkAmount ; i++) {
        i === 0 ? this.total += this.firstEms : this.total += this.otherEms;
      }
    }
    // console.log(checkAmount);
    // console.log(this.total);
  }

  value1Changed() {
    // console.log('change');
    this.calPrice();
  }
}
