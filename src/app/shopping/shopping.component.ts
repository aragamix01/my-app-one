import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { Lists } from './cart/lists.model';
import { ShoppingModel } from './shopping.model';
import { CustomerComponent } from './customer/customer.component';
import { CartComponent } from './cart/cart.component';
import { Customers } from './customer/customer.model';
import { ShoppingService } from './shopping.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
  providers: [ShoppingService]
})
export class ShoppingComponent implements OnInit {

  customers: Customers[] = [];
  lists: Lists[] = [];
  public alerts = [];
  isDisabled = false;

  @ViewChild(CartComponent)
  private cart: CartComponent;

  @ViewChild(CustomerComponent)
  private customer: CustomerComponent;

  constructor(private shoppingService: ShoppingService,
              private route: Router) { }

  ngOnInit() {
    this.shoppingService.getCustomers().then( (data) => {
      this.customers = data;
      console.log(this.customers);
    });
   }

  sendValues() {
    if (this.customer.name == null || this.customer.tel == null || this.customer.email == null ||
          this.customer.name === '' || this.customer.tel === '' || this.customer.email === '' ||
          this.cart.total === 0 ||
          (this.cart.isEms === true && ( this.cart.address == null || this.cart.address === ''))
        ) {
        this.alerts.push({
          type: 'danger',
          msg: 'โปรดกรอกข้อมูลให้ครบถ้วน',
          timeout: 2000
        });
        this.isDisabled = true;
        setTimeout(() => {
          this.isDisabled = false;
        }, 2000);
    }else {
      let adrs;
      this.cart.isEms === true ? adrs = this.cart.address : adrs = '';
      console.log(this.cart.address);
      const customer = new Customers(this.customer.name, adrs, this.customer.tel, this.customer.email, this.cart.total, this.cart.lists);
      this.customers.push(customer);
      this.shoppingService.storeCustomers(this.customers).subscribe(
        (res: Response) => {
          console.log(res.status);
          if (res.status === 200) {
            this.route.navigate(['success']);
          }
        }
      );
    }

  }

}
