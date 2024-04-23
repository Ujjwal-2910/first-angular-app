import { Component } from '@angular/core';
import { Product } from '../models/products';
import { ProductsService } from './products.service';
import { IProductActions } from '../models/custominterfaces';

@Component({
  selector: 'products-home',
  templateUrl: './products-home.component.html',
  styleUrl: './products-home.component.css'
})
export class ProductsHomeComponent {
  productList: Product[] = [];
  selectedProduct: Product = <Product>{};
  isEditAction: boolean = false;
  isDeleteAction: boolean = false;
  isAddNewAction: boolean = false;

  // View - isViewAction = false, isDeleteAction = false
  // Edit - isEditAction = true, isDeleteAction = false
  // Delete - isEditAction = false, isDeleteAction = true
  constructor(
    public service: ProductsService
  ) {
    this.productList = this.service.getAllProduct();
  }
  select(e: IProductActions) {
    // console.log('Step 2: Parent function invoke/reached')
    var item = this.service.getProductdetails(e.productId);
    // console.log('Step 3: Item is selected', item)
    if (item != null) this.selectedProduct = item;
    if (e.actionType == 1) {
      this.isEditAction = false;
      this.isDeleteAction = false;
    } else if (e.actionType == 2) {
      this.isEditAction = true;
      this.isDeleteAction = false;
    } else if (e.actionType == 3) {
      this.isEditAction = false;
      this.isDeleteAction = true;
    }
    // alert(this.selectedProduct.toString())
    // console.log('Step 4: Assigned to Selected Product');
    // console.log(this.selectedProduct.toString());
    // console.log(this.isEditAction, this.isDeleteAction);
    console.log("Edit", this.isEditAction, "Delete", this.isDeleteAction);
    console.log(e);
  }
  saveDetails(model: Product) {
    // update the data into the lsit using the services
    // and then have to repopulate the list.
    if (this.isAddNewAction)
      this.service.createNew(model);
    else
      this.service.update(model);
    this.initialize();
  }
  resetSelection(e: string) {
    this.initialize();
  }
  deleteItem(e: Product) {
    this.service.delete(e.productId);
    this.initialize();
  }
  initialize() {
    this.productList = this.service.getAllProduct();
    this.selectedProduct = <Product>{};
    this.isEditAction = false;
    this.isDeleteAction = false;
    this.isAddNewAction = false;
  }
  addNewClick() {
    this.selectedProduct = <Product>{};
    this.isEditAction = true;
    this.isAddNewAction = true;
  }
}
