import {
  Http,
  Response
} from '@angular/http';
import {
  Injectable
} from '@angular/core';

@Injectable()

export class DetailService {
  constructor(private http: Http) {}

  url = 'https://saintarmy-cheche48.firebaseio.com/';

  getCustomers() {
    return this.http.get(this.url + 'customers.json')
      .map(
        (res: Response) => {
            return res.json();
        }
      ).toPromise();
  }
}
