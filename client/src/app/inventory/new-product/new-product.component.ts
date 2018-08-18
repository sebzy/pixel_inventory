import { Component, Input} from '@angular/core';
import {DataService } from '../../data.service';
import { Product } from './Product';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
  providers: [DataService]
})



export class NewProductComponent {
  @Input()
  product : Product = <Product>{};

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;
  
    constructor(private dataService: DataService) { }
  

    createProduct(product: Product) {
      this.dataService.createProduct(product).then((newProduct: Product) => {
        console.log(product);
        this.createHandler(newProduct);
      });
    }
  
    updateProduct(product: Product): void {
      this.dataService.updateProduct(product).then((updatedProduct: Product) => {
        this.updateHandler(updatedProduct);
      });
    }
  
    deleteProduct(productId: String): void {
      this.dataService.deleteProduct(productId).then((deletedProductId: String) => {
        console.log(productId);
        this.deleteHandler(deletedProductId);
      });
    }

 
}


