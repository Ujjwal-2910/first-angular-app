import { Component } from '@angular/core';
import { Product } from '../models/products';
import { ProductsService } from './products.service';

@Component({
  selector: 'products-home',
  templateUrl: './products-home.component.html',
  styleUrl: './products-home.component.css'
})
export class ProductsHomeComponent {
  productList: Product[];
  selectedProduct: Product = <Product>{};
  constructor(
    public service: ProductsService
  ) {
    this.productList = this.service.getAllProduct();
  }
  select(productId: any) {
    console.log('Step 2: Parent function invoke/reached')
    var item = this.service.getProductdetails(parseInt(productId));
    console.log('Step 3: Item is selected', item)
    if (item) this.selectedProduct = item;
    // alert(this.selectedProduct.toString())
    console.log('Step 4: Assigned to Selected Product');
    console.log(this.selectedProduct.toString());
  }
}
