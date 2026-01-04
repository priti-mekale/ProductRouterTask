import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { ProductService } from '../../services/product.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Iproduct } from '../../model/product';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-product-from',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFromComponent implements OnInit {

  productArr: any[] = [];

  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  // get products for <td>
  getAllProducts() {
    this._productService.fetchProducts()
      .subscribe({
        next: (res) => {
          this.productArr = res;
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  // navigate to edit form
  onEdit(productId: string) {
    this._router.navigate(['product', productId]);
  }

  // delete product
  onDelete(productId: string) {
    this._productService.removeProduct(+productId);
    this._snackbar.openSnackbar('Product deleted successfully');
  }
}

