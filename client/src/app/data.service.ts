import { Injectable } from '@angular/core';
import { Product } from './inventory/new-product/Product';
import { Http ,Response } from '@angular/http';




@Injectable({
  providedIn: 'root'
})
export class DataService {
  private ProductsUri = 'http://localhost:8888/api/v1/products';

  private putUrl = 'http://localhost:8888/api/v1/product/create';
 
  private delUrl ='http://localhost:8888/api/v1/product/5b3a2ac413317a1021c0b1f0';

  private editUrl ='http://localhost:8888/api/v1/product/5b3a2ac413317a1021c0b1f0';

  constructor(private http: Http) {
    console.log("data service initialized....")
   }

   


   // get("http://localhost:8888/api/v1/products")
   getProducts(): Promise<void | Product[]> {
    return this.http.get(this.ProductsUri)
               .toPromise()
               .then(response => response.json() as Product[])
               .catch(this.handleError);
              
  }

// post("http://localhost:8888/api/v1/product/create")
    createProduct(newProduct: Product): Promise<void | Product> {
      
      return this.http.post(this.putUrl, newProduct)
                 .toPromise()
                 .then(response => response.json() as Product)
                 .catch(this.handleError);
    }

  // delete("/api/Products/")
  deleteProduct(delProductId: String): Promise<void | String> {
    return this.http.delete(this.delUrl)
               .toPromise()
               .then(response => response.json() as String)
               .catch(this.handleError);
  }

  
  // put("/api/Products/")
  updateProduct(putProduct: Product): Promise<void | Product> {
   
    return this.http.put(this.editUrl, putProduct)
               .toPromise()
               .then(response => response.json() as Product)
               .catch(this.handleError);
  }
   

  ///handling errors
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
   

  }



 


