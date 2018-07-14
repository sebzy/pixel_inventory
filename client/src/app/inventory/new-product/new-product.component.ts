import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})



export class NewProductComponent implements OnInit {
  product_name;
  formdata;




  constructor() { }

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
  }

 


  onSubmit(data) {
    this.product_name = data.product_name;
    console.log(data);
  }

}
