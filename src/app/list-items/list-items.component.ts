import { Response } from '@angular/http';
import { ListItem } from './list-items.model';
import { ListItemService } from './list-items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
  providers: [ListItemService]
})
export class ListItemsComponent implements OnInit {
  items: ListItem[] = [];
  item: ListItem;
  index: number;

  constructor(private liService: ListItemService) { }

  ngOnInit() {
    this.liService.getListItems().then((data) => {
      this.items = data;
    });
  }

  onAddItem(event) {
    this.items.push(event);
    this.liService.storeListItems(this.items).subscribe(
      (res: Response) => console.log('status : ' + res.status)
    );
  }

  onDeleteItem(index: number) {
    this.items.splice(index, 1);
    this.liService.storeListItems(this.items).subscribe(
      (res: Response) => console.log('status : ' + res.status)
    );
  }

  onEditItem(index: number, item: ListItem) {
    this.index = index;
    this.item = item;
  }

  onEditEvent(event) {
    this.items[this.index] = event;
    this.liService.storeListItems(this.items).subscribe(
      (res: Response) => console.log('status : ' + res.status)
    );
  }
}
