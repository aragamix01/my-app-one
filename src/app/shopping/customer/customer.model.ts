import { Lists } from '../cart/lists.model';
export class Customers {
    name: string;
    location: string;
    tel: string;
    email: string;
    lists: Lists[];

    constructor( name: string, location: string, tel: string, email: string, lists: Lists[] ) {
        this.name = name;
        this.location = location;
        this.tel = tel;
        this.email = email;
        this.lists = lists;
    }
}
