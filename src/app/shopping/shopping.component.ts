import { Customers } from './customer/customer.model';
import { ShoppingService } from './shopping.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
  providers: [ShoppingService]
})
export class ShoppingComponent implements OnInit {
  customers: Customers[] = [];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.shoppingService.getCustomers().then( (data) => {
      this.customers = data;
      console.log(this.customers);
    });
  }

}
