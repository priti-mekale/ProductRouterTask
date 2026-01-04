import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../model/product';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-sproduct',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SproductComponent implements OnInit {
 productId!:string
  productInfo!:Iproduct
  constructor(
    private _router:ActivatedRoute,
    private _productService:ProductService,
    private _routes:Router,
    private _matDilog:MatDialog,
    private _snackbar:SnackbarService
  ) { }

  ngOnInit(): void {
    this.fetchsingleProduct()
  }

  fetchsingleProduct(){
     this._router.paramMap.subscribe(param=>{
   this.productId=param.get('productId')!;
   console.log(this.productId)
  this._productService.fetchProduct(+this.productId)
     .subscribe({
      next:res=>{
        console.log(res)
        this.productInfo=res
      },
      error:err=>{
        console.log(err)
      }
     })
   })
  }

  // onformEdit() {
  //   this._routes.navigate(['editProduct'], { relativeTo: this._router });
  // }

  onRemove(){
   let matDilogConfig=new MatDialogConfig()
     matDilogConfig.data='Are you sure you want to remove this Product?'
     matDilogConfig.disableClose=true
   let matDilogRef=  this._matDilog.open(GetConfirmComponent, matDilogConfig)
   matDilogRef.afterClosed()
    .subscribe({
      next:res=>{
        if(res){
          if(this.productId){
            this._productService.removeProduct(+this.productId)
            this._routes.navigate(['product'])
            this._snackbar.openSnackbar(`This product id ${this.productId} removed successfully.`)
          }
        }
      }
    })

  }
}