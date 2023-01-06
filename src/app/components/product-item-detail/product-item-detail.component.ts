import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../models/Product";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product!: Product;

  quantity: number = 1;

  constructor(private productsService: ProductsService, private cartService: CartService) {

  }

  ngOnInit(): void {
    this.product = this.productsService.getDetailProduct();
  }

  addToCart(product: Product): void {
    this.cartService.add({quantity: this.quantity, product});
    alert(`${product.name} added to cart`);
  }
}
