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
export class SingleProductComponent implements OnInit {
 productArr: Iproduct[] = [];

  prodObj!: Iproduct;
  prodId!: string;

  constructor(
    private _route: ActivatedRoute,
    private _ProductService: ProductService,
    private _matDialog: MatDialog   ,
    private _router:Router
  ) {}

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails() {
    this._route.paramMap.subscribe(param => {
      const id = param.get('productId');

      if (id) {
        this.prodId = id;

        this._ProductService.fetchProduct(this.prodId).subscribe({
          next: (data) => {
            this.prodObj = data;
          },
          error: (err) => {
            console.error('Error fetching product:', err);
          }
        });
      }
    });
  }

onEdit()
{
  
}

onRemove() {
  const matConfig = new MatDialogConfig();
  matConfig.width = '450px';
  matConfig.data = `Are you sure you want to remove product with id ${this.prodId}?`;

  const dialogRef = this._matDialog.open(GetConfirmComponent, matConfig);

  dialogRef.afterClosed().subscribe((result) => {
    if (result === true) {
      // ✅ CALL STRING ID METHOD
      this._ProductService.removeProduct(this.prodId).subscribe({
        next: (data) => {
          console.log('Deleted product:', data);
          this._router.navigate(['/products']);
        },
        error: (err) => console.log(err)
      });
    } else {
      console.log('Delete cancelled');
    }
  });
}

}