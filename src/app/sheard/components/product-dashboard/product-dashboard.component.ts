import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UuidService } from '../../services/uuid.service';
import { ProductService } from '../../services/product.service';
import { SnackbarService } from '../../services/snackbar.service';
// import { Component } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductdComponent implements OnInit {

  productForm!: FormGroup;
  productInfo: any;
  isIneditMode: boolean = false;
  productId!: string;

  constructor(
    private _uuid: UuidService,
    private _productService: ProductService,
    private _snackbar: SnackbarService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.createProductForm();
    this.loadProduct();
  }

  // create form
  createProductForm() {
    this.productForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required)
    });
  }

  // add product
  onAddproduct() {
    if (this.productForm.valid) {
      const obj = {
        ...this.productForm.value,
        id: this._uuid.Uuid()
      };

      this._productService.createProduct(obj);
      this.productForm.reset();
      this._snackbar.openSnackbar(`This ${obj.title} added successfully.`);
      this._router.navigate(['product']);
    }
  }

  // load product for edit + display
  loadProduct() {
    this.productId = this._route.snapshot.params['productId'];

    if (this.productId) {
      this.isIneditMode = true;

      this._productService.fetchProduct(+this.productId)
        .subscribe({
          next: (res) => {
            this.productInfo = res;          // for card / td
            this.productForm.patchValue(res); // for form
          },
          error: (err) => console.log(err)
        });
    }
  }

  // update product
  onUpdate() {
    if (this.productForm.valid) {
      const updateObj = {
        ...this.productForm.value,
        id: this.productId
      };

      this._productService.updateProduct(updateObj);
      this.productForm.reset();
      this.isIneditMode = false;
      this._snackbar.openSnackbar(`This ${updateObj.title} updated successfully.`);
      this._router.navigate(['product']);
    }
  }

  // delete product
  onRemove() {
    this._productService.removeProduct(+this.productId);
    this._snackbar.openSnackbar('Product deleted successfully');
    this._router.navigate(['product']);
  }
}
