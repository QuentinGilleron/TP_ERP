import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
  

  
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private productsUrl = 'http://80.11.122.222:8000/polyfx/cgi/getart.cgi?frs=';
  private fournisseurId : string = "401000238";
  private products: Product[]=[];


  getProducts(): Observable<Product[]>{
    if (this.products.length == 0) {
      return this.http.get<Product[]>(this.productsUrl + this.fournisseurId);
    }
    else {
      return of(this.products);
    }
  }

  setFournisseur(fournisseurId : number) {
    this.fournisseurId = fournisseurId.toString();
    this.products = [];
  }
}

