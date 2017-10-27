import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HeaderComponent } from './header/header.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ListItemsComponent } from './list-items/list-items.component';
import { ListEditComponent } from './list-items/list-edit/list-edit.component';
import { FormsModule } from '@angular/forms';
import { ShoppingComponent } from './shopping/shopping.component';
import { CartComponent } from './shopping/cart/cart.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CustomerComponent } from './shopping/customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListItemsComponent,
    ListEditComponent,
    ShoppingComponent,
    CartComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
