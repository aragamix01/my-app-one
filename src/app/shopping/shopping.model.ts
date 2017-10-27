import { Lists } from './cart/lists.model';
import { Customers } from './customer/customer.model';
export class ShoppingModel {
    customers: Customers[];
    lists: Lists[];

    constructor(customer: Customers[], lists: Lists[]) {
        this.customers = customer;
        this.lists = lists;
    }
}
