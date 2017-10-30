import {
  Lists
} from './lists.model';
import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

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
  sizeNM = ['S', 'M', 'L', 'XL'];

  lists: Lists[] = [
    new Lists(null, 1, true)
  ];

  total = 0;
  shippingCost = 0;
  shirtCost = 0;
  isEditSize = true;
  isEms = false;
  address: string;


  constructor() {}

  ngOnInit() {}

  getSize(size: string, index: number) {
    this.lists[index].edit = true;
    this.lists[index].size = size;
    if (size === 'OV') {
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
    this.calPrice();
  }

  calPrice() {
    this.total = 0;
    this.shippingCost = 0;
    this.shirtCost = 0;
    let checkAmount = 0;
    let isNM = false;
    this.lists.forEach((list, index) => {
      if (list.size != null && list.amount != null) {
        this.sizeNM.forEach(size => {
          if (list.size === size) {
            isNM = true;
          }
        });
        if (isNM === true) {
          this.total += this.ShirtPrizeNM * +list.amount;
          checkAmount += +list.amount;
        } else {
          this.total += this.ShirtPrizeOV * +list.amount;
          checkAmount += +list.amount;
        }
      }
    });
    this.shirtCost = this.total;
    if (this.isEms === true) {
      for (let i = 0; i < checkAmount; i++) {
        i === 0 ? this.shippingCost += this.firstEms : this.shippingCost += this.otherEms;
      }
    }
    this.total += this.shippingCost;
  }

  value1Changed() {
    this.calPrice();
  }

  test() {
    console.log('child');
  }
}
