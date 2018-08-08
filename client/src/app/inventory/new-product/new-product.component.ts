import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {DataService } from '../../data.service';
import { Http ,Headers } from '@angular/http';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})



export class NewProductComponent implements OnInit {
  product_name;
  formdata;
  AddProduct;
  Product:any;
  products;
  postProducts;


  constructor(private http: Http) { 

    
  }

  ngOnInit() {
    this.formdata = new FormGroup({
      product_name: new FormControl(""),
      sku: new FormControl(""),
      supplier: new FormControl(""),
      description: new FormControl(""),
      cost_px: new FormControl(""),
      selling_px: new FormControl(""),
      stock_on_hand: new FormControl(""),
      category: new FormControl(""),
      comment: new FormControl(""),
      approved_by: new FormControl("")

   });

   this.http.get("http://localhost:8888/api/v1/products").subscribe(data => {
    return this.products = data.json();
  });
}

 


  onSubmit(data) {
    this.product_name = data.product_name;
    console.log(data);
    this.postProducts = data;

    // By default, a newly-created product will have the selected state.

     this.Product ='http://localhost:8888/api/v1/product/create';
    //this.AddProduct(data);

    this.AddProduct = () => {
      this.Product.push(this.postProducts);
      //this.selectContact(contact);
      return this.postProducts;
    }
  }

}
