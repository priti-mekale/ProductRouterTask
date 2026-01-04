import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Iproduct } from '../model/product';

 @Injectable({ providedIn: 'root' })
export class ProductService {

  productArr: Iproduct[] = [
    { id: '1', name: 'Phone', price: 20000, category: 'Electronics', description: 'Smart phone', imageUrl: '' },
    { id: '2', name: 'Laptop', price: 60000, category: 'Electronics', description: 'Laptop', imageUrl: '' }
  ];

  fetchProducts(): Observable<Iproduct[]> {
    return of(this.productArr);
  }

  fetchProduct(id: number): Observable<Iproduct> {
    return of(this.productArr.find(p => +p.id === id)!);
  }

  createProduct(product: Iproduct): Observable<Iproduct> {
    this.productArr.push(product);
    return of(product);
  }

  updateProduct(product: Iproduct): Observable<Iproduct> {
    const index = this.productArr.findIndex(p => p.id === product.id);
    this.productArr[index] = product;
    return of(product);
  }

  removeProduct(id: number): Observable<Iproduct> {
  const index = this.productArr.findIndex(p => +p.id === id);
  const removed = this.productArr.splice(index, 1);
  return of(removed[0]);
}

}


  

