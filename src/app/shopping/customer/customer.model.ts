import { Lists } from '../cart/lists.model';
export class Customers {
    name: string;
    location: string;
    lists: Lists[];

    constructor( name: string, location: string, lists: Lists[] ) {
        this.name = name;
        this.location = location;
        this.lists = lists;
    }
}
