import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SupplierComponentComponent } from './supplier-component/supplier-component.component';
import { PurchasesComponentComponent } from './purchases-component/purchases-component.component';
import { InventoryComponentComponent } from './inventory-component/inventory-component.component';
import { SalesComponentComponent } from './sales-component/sales-component.component';
import { CustomersComponentComponent } from './customers-component/customers-component.component';


@NgModule({
  declarations: [
    AppComponent,
    SupplierComponentComponent,
    PurchasesComponentComponent,
    InventoryComponentComponent,
    SalesComponentComponent,
    CustomersComponentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
