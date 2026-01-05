import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../model/product';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-product',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
productArr:Iproduct[]=[]
prodId: any;
  constructor(private _Product1Service:ProductService,
    private _SnackbarService:SnackbarService,
    private _router:Router,
    private _routes:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProducts()
   
    if (this.productArr.length > 0) {
    this.getProduct(this.productArr[0]);
  }
//  this._router.navigate(
//   [this.productArr[0].id],
//   {
//     relativeTo: this._routes,
//     queryParams: { edit: true }
//   }
// );

  }


  getProducts(){
    this._Product1Service.fetchProducts().subscribe({
      next:data=>{
        this.productArr=data
      },
      error:err=>{
        this._SnackbarService.openSnackbar(err)
      }
    })
  }


  getProduct(product: Iproduct) {
    this._router.navigate(['/products', product.id]);
  }


    
}
