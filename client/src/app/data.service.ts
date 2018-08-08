import { Injectable } from '@angular/core';

import { Http ,Headers } from '@angular/http';
// import '../../rxjs/add/operator/map';
// import './rxjs-operators';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class DataService {

 products:any;

  constructor(private http: Http) {
    console.log("data service initialized....")
   }

  product_uri = "http://localhost:8888/api/v1/products";
  
  getAllProducts(){
    ///return this.http.get(this.product_uri)
    //  .map(this.products => this.products = products.json().data);
    //.pipe(map(res => res.json()));

   // .myObservable().pipe(map(data => json()));

   //return
   

    this.http.get("http://localhost:8888/api/v1/products").subscribe(data => {
     return this.products = data.json();
     // this.products = Array.of(this.products);
     // console.log(this.products);
  });

  }



 

}
