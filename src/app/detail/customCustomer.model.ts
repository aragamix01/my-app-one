export class CustomCustomer {
  name: string;
  tel: string;
  location: string;
  email: string;
  total: number;
  size: string;

  constructor(name: string, tel: string, location: string, email: string, total: number, size: string) {
    this.name = name;
    this.tel = tel;
    this.location = location;
    this.email = email;
    this.total = total;
    this.size = size;
  }
}
