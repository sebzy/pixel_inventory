import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from "@angular/common/http";
// import { Http ,Headers } from '@angular/http';


import { AppComponent } from './app.component';

import { AppRoutingModule } from './/app-routing.module';
import { NewCustomersComponent } from './customers/new-customers/new-customers.component';
import { ViewCustomersComponent } from './customers/view-customers/view-customers.component';
import { SalesReturnsComponent } from './sales/sales-returns/sales-returns.component';
import { ViewSalesComponent } from './sales/view-sales/view-sales.component';
import { NewSaleComponent } from './sales/new-sale/new-sale.component';
import { ViewQuotesComponent } from './sales/view-quotes/view-quotes.component';
import { NewQuoteComponent } from './sales/new-quote/new-quote.component';
import { ViewProductsComponent } from './inventory/view-products/view-products.component';
import { NewProductComponent } from './inventory/new-product/new-product.component';
import { StockChangesComponent } from './inventory/stock-changes/stock-changes.component';
import { StockTakeComponent } from './inventory/stock-take/stock-take.component';
import { ViewStockComponent } from './inventory/view-stock/view-stock.component';
import { ReorderComponent } from './purchases/reorder/reorder.component';
import { ViewPurchasesComponent } from './purchases/view-purchases/view-purchases.component';
import { NewPurchaseComponent } from './purchases/new-purchase/new-purchase.component';
import { ViewSuppliersComponent } from './suppliers/view-suppliers/view-suppliers.component';
import { NewSupplierComponent } from './suppliers/new-supplier/new-supplier.component';




@NgModule({
  declarations: [
    AppComponent,
    NewCustomersComponent,
    ViewCustomersComponent,
    SalesReturnsComponent,
    ViewSalesComponent,
    NewSaleComponent,
    ViewQuotesComponent,
    NewQuoteComponent,
    ViewProductsComponent,
    NewProductComponent,
    StockChangesComponent,
    StockTakeComponent,
    ViewStockComponent,
    ReorderComponent,
    ViewPurchasesComponent,
    NewPurchaseComponent,
    ViewSuppliersComponent,
    
    NewSupplierComponent


    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    // Http ,
    // Headers,
    
    
    NgbModule.forRoot(),
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
  
 }
