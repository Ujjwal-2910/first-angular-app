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
}