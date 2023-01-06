import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {ProductsService} from "../../services/products.service";
import {CartItem} from "../../models/CartItem";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products => this.products = products);
  }

  addToCart(cartItem: CartItem): void {
    this.cartService.add(cartItem);
    alert(`${cartItem.product.name} added to cart`);
  }
}
