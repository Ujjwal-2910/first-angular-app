import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/products';
import { IProductActions } from '../models/custominterfaces';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  @Input()
  productList: Product[] = [];

  @Output("selectedItemEvent")
  // selectItemEvent: EventEmitter<number> = new EventEmitter<number>();
  selectItemEvent: EventEmitter<IProductActions> = new EventEmitter<IProductActions>();

  @Output("addNewItemEvent")
  addNewItemEvent: EventEmitter<void> = new EventEmitter<void>();

  viewItemClick(productId: any) {
    var id = parseInt(productId);
    // console.log("Step 1:", id);
    // this.selectItemEvent.emit(id);
    this.selectItemEvent.emit({ productId: id, actionType: 1 });
  }
  editItemClick(productId: any) {
    var id = parseInt(productId);
    this.selectItemEvent.emit({ productId: id, actionType: 2 });
  }
  deleteItemClick(productId: any) {
    var id = parseInt(productId);
    this.selectItemEvent.emit({ productId: id, actionType: 3 });
  }
  addNewItemClick() {
    this.addNewItemEvent.emit();
  }

  /*
  1. When addnew is clicked, a new empty product object should be created and assigned to
    the selectedProduct.
  2. This action is happening in the child component, it should get
    redirected to the parent component where the empty object will be created. Also define
    some flags to denote that it is coming from AddNew action.
  3.When the user clicks on save in the details component, the parent component should
    check the flags and call either the update or the create method of the service.
  4.The service does not have a create method, so write one method for adding the item to the
    list.
  */

  // we injecting that service here

  // constructor(
  //   public service: ProductsService
  // ) {
  //   this.productList = this.service.getAllProduct()
  // }
}