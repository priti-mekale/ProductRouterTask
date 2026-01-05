import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Iproduct } from '../model/product';

 @Injectable({ providedIn: 'root' })
export class ProductService {
productArr:Array<Iproduct>= [
  {
    id: '1',
    name: "Smartphone",
    price: 29999,
    category: "Electronics",
    description: "Latest model smartphone with high-end features.",
    imageUrl: "https://example.com/images/smartphone.jpg"
  },
  {
    id: '2',
    name: "Laptop",
    price: 65999,
    category: "Electronics",
    description: "Powerful laptop for work and gaming.",
    imageUrl: "https://example.com/images/laptop.jpg"
  },
  {
    id: '3',
    name: "Headphones",
    price: 2999,
    category: "Accessories",
    description: "Noise-cancelling wireless headphones.",
    imageUrl: "https://example.com/images/headphones.jpg"
  },
  {
    id: '4',
    name: "Smart Watch",
    price: 7999,
    category: "Wearables",
    description: "Smart watch with health tracking features.",
    imageUrl: "https://example.com/images/smartwatch.jpg"
  },
  {
    id: '4',
    name: "Bluetooth Speaker",
    price: 1999,
    category: "Audio",
    description: "Portable Bluetooth speaker with deep bass.",
    imageUrl: "https://example.com/images/speaker.jpg"
  },
  {
    id: '5',
    name: "Tablet",
    price: 24999,
    category: "Electronics",
    description: "Lightweight tablet for work and entertainment.",
    imageUrl: "https://example.com/images/tablet.jpg"
  }
];

  constructor() { }
fetchProducts():Observable<Iproduct[]>{
  return of(this.productArr);
}

fetchProduct(prodId: string): Observable<Iproduct> {
  return of(
    this.productArr.find(f => f.id === prodId) as Iproduct
  );
}


createProduct(productObj:Iproduct):Observable<Iproduct>{
  this.productArr.push(productObj)
  return of (productObj)
}

updateProduct(updateProduct:Iproduct):Observable<Iproduct>{
  let getIndex=this.productArr.findIndex(p=>p.id===updateProduct.id)
  this.productArr[getIndex]=updateProduct
  return of(updateProduct)

}





removeProduct(id: string): Observable<Iproduct> {
  const index = this.productArr.findIndex(p => p.id === id);
  const removed = this.productArr.splice(index, 1);
  return of(removed[0]);
}

}


  

