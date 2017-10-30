import { CustomCustomer } from './customCustomer.model';
import { Customers } from '../shopping/customer/customer.model';
import { DetailService } from './detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [DetailService]
})
export class DetailComponent implements OnInit {

  customCustomer: CustomCustomer[] = [];
  haveData = false;

  customers: Customers[] = [];
  constructor(private detailService: DetailService) { }

  ngOnInit() {
    this.detailService.getCustomers().then( (data) => {
      this.customers = data;
      this.customers.forEach(cus => {
        let textSize = '';
        cus.lists.forEach( (size, index) => {
          textSize += size.size + '(' + size.amount + ')';
          index < cus.lists.length - 1 ? textSize += ', ' : textSize += '';
        });
        const c1 = new CustomCustomer(cus.name, cus.tel, cus.location, cus.email, cus.total, textSize);
        this.customCustomer.push(c1);
      });
      this.haveData = true;
    });
  }

}
