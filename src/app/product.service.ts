import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';




@Injectable({
  providedIn: 'root',
  

  
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private productsUrl = 'http://80.11.122.222:8000/polyfx/cgi/getart.cgi?frs=';
  private fournisseurId : string = "401000075";
  private products: Product[]=[];


  

}
