import { Component, Input } from '@angular/core';
import { Product } from '../models/products';

@Component({
  selector: 'products-detail',
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.css'
})
export class ProductsDetailComponent {
  @Input()
  productItem: Product = <Product>{};
}
