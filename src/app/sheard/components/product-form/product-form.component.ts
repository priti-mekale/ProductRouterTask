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
 isInEditMode: boolean = false;

  @ViewChild('productForm')
  productForm!: NgForm;

  prodId!: string;

  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _routes: ActivatedRoute,
    private _snackbar: SnackbarService,private _uuid:UuidService
  ) {}

  ngOnInit(): void {
  this.patchVlueInForm()
  }

patchVlueInForm(){
    this.prodId = this._routes.snapshot.paramMap.get('productId')!;
    // http://localhost:4200/products/3/edit

    if (this.prodId) {
      this.isInEditMode = true;

      this._productService.fetchProduct(this.prodId).subscribe({
        next: (data) => {
           setTimeout(() => {
      this.productForm.form.patchValue(data)
    });
        },
        error: (err) => {
          this._snackbar.openSnackbar(err);
        }
      });
    }
}

onSubmit() {
  if (this.productForm.valid) {

    const productObj: Iproduct = {
      ...this.productForm.value,
      id: this._uuid.Uuid()  
    };

    this._productService.createProduct(productObj)
      .subscribe({
        next: () => {
          this._snackbar.openSnackbar('Product added successfully');
          // this._router.navigate(['products']); 
          this._router.navigate(['/products', productObj.id]);

        },
        error: (err) => {
          this._snackbar.openSnackbar('Something went wrong');
        }
      });
  }
}

onUpdate() {
  if (this.productForm.valid) {
    let Udated_obj: Iproduct = {
      ...this.productForm.value,
      id: +this.prodId  
    };

    console.log(Udated_obj);

    this._productService.updateProduct(Udated_obj)
      .subscribe({
        next: data => {
          this._snackbar.openSnackbar(`this product is updated successfully....`);
           this._router.navigate(['/products']);
        },
        error: err => {
          this._snackbar.openSnackbar(err);
        }
      });
  }
}
}

