import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/Product";
import * as http from "http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private detailProduct!: Product;

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("https://raw.githubusercontent.com/udacity/nd-0067-c3-angular-fundamentals-project-starter/main/src/assets/data.json");
  }

  setDetailProduct(product: Product): void {
    this.detailProduct = product;
  }

  getDetailProduct(): Product {
    return this.detailProduct;
  }
}
