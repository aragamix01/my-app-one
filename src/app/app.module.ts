import { AppRoutingModule } from './app-routing.module';
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
import { AlertModule } from 'ngx-bootstrap/alert';
import { SuccessComponent } from './success/success.component';
import { DetailComponent } from './detail/detail.component';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { FieldsetModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListItemsComponent,
    ListEditComponent,
    ShoppingComponent,
    CartComponent,
    CustomerComponent,
    SuccessComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    AppRoutingModule,
    DataTableModule,
    SharedModule,
    FieldsetModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
