import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/products';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  @Input()
  productList: Product[] = [];

  @Output("selectedItemEvent")
  selectItemEvent: EventEmitter<number> = new EventEmitter<number>();

  viewItemClick(productId: any) {
    var id = parseInt(productId);
    console.log("Step 1:", id);
    this.selectItemEvent.emit(id);
  }

  //we injecting that service here

  // constructor(
  //   public service: ProductsService
  // ) {
  //   this.productList = this.service.getAllProduct()
  // }
}