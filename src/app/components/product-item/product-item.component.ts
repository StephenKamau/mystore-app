import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../models/Product";
import {CartItem} from "../../models/CartItem";
import {Router} from "@angular/router";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() add: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  quantity: number = 1;

  constructor(private router: Router,private productsService:ProductsService) {
  }

  addToCart(product: Product): void {
    this.add.emit({quantity: this.quantity, product});
  }

  navigateToProductDetail(product: Product) {
    this.productsService.setDetailProduct(product);
    this.router.navigate(['detail']);
  }
}
