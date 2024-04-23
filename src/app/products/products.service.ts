import { Injectable } from '@angular/core';
import { Product } from '../models/products';

const productList = [
  new Product(1, "Bat", 100, 33, true),
  new Product(2, "Ball", 10, 33, true),
  new Product(3, "Hat", 12, 33, true),
  new Product(4, "Pads", 90, 33, true),
  new Product(5, "Gloves", 50, 33, true),
];


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getAllProduct() {
    return productList;
  }

  getProductdetails(id: number) {
    var filteredList = productList.filter(c => c.productId == id);
    if (filteredList.length)
      return filteredList[0];
    return null;
  }
  
  // home-compnent.ts save(), call this method
  // this.service.update(model)
  update(model: Product) {
    var findIndex = productList.findIndex(c => c.productId == model.productId);
    if(findIndex > -1) {
      productList.splice(findIndex, 1, {...model});
    }
  }
  
  // home-compnent.ts deleteItem(), call this method
  delete(id: number) {
    var findIndex = productList.findIndex(c => c.productId == id);
    if(findIndex > -1) {
      productList.splice(findIndex, 1);
    }
  }

  createNew(model: Product) { 
    var max=1;
    productList.forEach(c=>{
      if(c.productId>max)
        max=c.productId;
    })
    model.productId = max+1;
    var findIndex = productList.findIndex(c=>c.productId==model.productId); 
    if(findIndex<0) { 
      productList.push(model);
    }
  }
}