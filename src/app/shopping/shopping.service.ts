import { Http, Response } from '@angular/http';
import { Lists } from './cart/lists.model';
import { Customers } from './customer/customer.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingService {


    url = 'https://saintarmy-cheche48.firebaseio.com/';

    constructor(private http: Http) {}

    getCustomers(): Promise< any > {
        return new Promise( (resolve, reject) => {
            this.http.get(this.url + 'customers.json')
            .subscribe(
                (res: Response) => {
                    resolve(res.json());
                }
            );
        });
    }

    storeCustomers(customers: Customers[]) {
        return this.http.put(this.url + 'customers.json', customers);
    }

    test(lists: Lists[]) {
        console.log(lists);
    }
}
