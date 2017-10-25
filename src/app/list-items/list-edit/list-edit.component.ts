import { ListItem } from '../list-items.model';
import { ListItemService } from '../list-items.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.scss'],
  providers: [ListItemService]
})
export class ListEditComponent implements OnInit, OnChanges {
  name: string;
  amount: number;
  description: string;
  @Input() item: ListItem;
  editMode = false;

  @Output() addItemEvent = new EventEmitter<any>();
  @Output() editItemEvent = new EventEmitter<any>();

  constructor(private liService: ListItemService) { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.item.currentValue != null) {
      this.name = changes.item.currentValue.name;
      this.amount = changes.item.currentValue.amount;
      this.description = changes.item.currentValue.description;
      this.editMode = true;
    }
  }


  onAddItems() {

    if (this.editMode === false) {
      this.addItemEvent.emit(new ListItem(this.name, this.amount, this.description));
    }else {
      this.editItemEvent.emit(new ListItem(this.name, this.amount, this.description));
      this.name = '';
      this.amount = null;
      this.description = '';
      this.editMode = false;
    }
  }

}
