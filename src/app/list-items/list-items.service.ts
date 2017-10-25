import { Http, Response } from '@angular/http';
import { ListItem } from './list-items.model';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class ListItemService {
    items: ListItem[] = [];
    item: ListItem;
    url = 'https://saintarmy-cheche48.firebaseio.com/';

    constructor(private http: Http) {
        // this.getListItems().then((data) => {
        //     this.items = data;
        // });
    }

    getListItems(): Promise< any > {
        return new Promise((resolve, reject) => {
            this.http.get(this.url + 'listItems.json')
            .subscribe(
                (res: Response) => {
                    resolve(res.json());
                }
            );
        });
    }

    getListItems2() {
        return this.http.get(this.url + 'listItems.json')
            .map(res => res.json())
            .map( items => {
                return <ListItem[]> items;
            }).toPromise();
    }

    storeListItems(listItems: ListItem[]) {
        return this.http.put(this.url + 'listItems.json', listItems);
    }
}
