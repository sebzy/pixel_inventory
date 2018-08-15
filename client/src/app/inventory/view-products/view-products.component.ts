import { Component, OnInit } from '@angular/core';
import {DataService } from '../../data.service';
import { Product } from '../new-product/Product';


@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  products: Product[]
  selectedProduct: Product
    
    constructor(private dataService: DataService) { 
  
   }

  ngOnInit(){
    this.dataService
     .getProducts()
     .then((products: Product[]) => {
       this.products = products.map((product) => {
        
        console.log(product);
         return product;
       });
     });
 }
  


 
//  private getIndexOfProduct = (productId: String) => {
//   return this.products.findIndex((product) => {
//     return product._id === productId;
//   });
// }

// selectProduct(Product: Product) {
//   this.selectedProduct = Product
// }

// createNewProduct() {
//   var product: Product = {
//     productName: '',
//           sku: '',
//           supplier: '',
//           description: '',
//           costPx: '',
//           sellingPx: '',
//           stockOnHand: '',
//           category: '',
//           comment: '',
//           approvedBy: ''

//   };

//   // By default, a newly-created product will have the selected state.
//   this.selectProduct(product);
// }

// deleteProduct = (productId: String) => {
//   var idx = this.getIndexOfProduct(productId);
//   if (idx !== -1) {
//     this.products.splice(idx, 1);
//     this.selectProduct(null);
//   }
//   return this.products;
// }

// addProduct = (product: Product) => {
//   this.products.push(product);
//   this.selectProduct(product);
//   return this.products;
// }

// updateProduct = (product: Product) => {
//   var idx = this.getIndexOfProduct(product._id);
//   if (idx !== -1) {
//     this.products[idx] = product;
//     this.selectProduct(product);
//   }
//   return this.products;
// }
  
}
