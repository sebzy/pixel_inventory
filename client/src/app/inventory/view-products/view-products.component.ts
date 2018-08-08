import { Component, OnInit } from '@angular/core';
 import { Http ,Headers } from '@angular/http';
import {DataService } from '../../data.service';
//import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import './../rxjs-operators';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

    products:any;

  constructor(private http: Http) {
    //this.dataService.getAllProducts();
    // console.log(this.products);
   }

  ngOnInit() {
    this.http.get("http://localhost:8888/api/v1/products").subscribe(data => {
      this.products = data.json();
     // this.products = Array.of(this.products);
      console.log(this.products);
  });


  } 
}
