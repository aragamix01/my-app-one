import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()

export class DetailService {
    constructor(private http: Http) {}

    url = 'https://saintarmy-cheche48.firebaseio.com/';

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
}
