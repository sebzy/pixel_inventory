import { NgModule }             from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
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



const routes: Routes = [
  {
    path: 'app-new-customers',
    component: NewCustomersComponent,
},
  {
      path: 'app-view-customers',
      component: ViewCustomersComponent,
  },
  {
    path: 'app-new-product',
    component: NewProductComponent,
},
{
  path: 'app-stock-changes',
  component: StockChangesComponent,
},
{
  path: 'app-stock-take',
  component: StockTakeComponent,
},
{
  path: 'app-view-products',
  component: ViewProductsComponent,
},
{
  path: 'app-view-stock',
  component: ViewStockComponent,
},
{
  path: 'app-new-purchase',
  component: NewPurchaseComponent,
},
{
  path: 'app-reorder',
  component: ReorderComponent,
},
{
  path: 'app-view-purchases',
  component: ViewPurchasesComponent,
},
{
  path: 'app-new-quote',
  component: NewQuoteComponent,
},
{
  path: 'app-sales-returns',
  component: SalesReturnsComponent,
},
{
  path: 'app-view-quotes',
  component: ViewQuotesComponent,
},
{
  path: 'app-view-sales',
  component: ViewSalesComponent,
},
{
  path: 'app-new-supplier',
  component: NewSupplierComponent,
},
{
  path: 'app-view-suppliers',
  component: ViewSuppliersComponent,
},
{
  path: 'app-new-sale',
  component: NewSaleComponent,
},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
],

  declarations: []
})
export class AppRoutingModule { }