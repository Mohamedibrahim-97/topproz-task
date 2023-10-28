import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient ) { }

  getProducts ( limit: number, skip?: number) {
    return this.http.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip || 0}`)
  }

  getSingleProduct ( id: number) {
    return this.http.get(`https://dummyjson.com/products/${id}`)
  }

  deleteSingleProduct ( id: number) {
    return this.http.delete(`https://dummyjson.com/products/${id}`)
  }

  addProduct(body:any) {
    return this.http.post('https://dummyjson.com/products/add', body, {
      headers: new HttpHeaders().append('Content-Type', 'application/json' )
    })
  }
  updateProduct(body:any, id:number) {
    return this.http.put(`https://dummyjson.com/products/${id}`, body, {
      headers: new HttpHeaders().append('Content-Type', 'application/json' )
    })
  }
}
