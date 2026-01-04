import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NavbarComponent } from './sheard/components/navbar/navbar.component';
import { HomeComponent } from './sheard/components/home/home.component';
import { FairComponent } from './sheard/components/fair/fair.component';
import { UserComponent } from './sheard/components/user/user.component';
import { SproductComponent } from './sheard/components/single-product/single-product.component';
import { GetConfirmComponent } from './sheard/components/get-confirm/get-confirm.component';



import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFromComponent } from './sheard/components/product-form/product-form.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    HomeComponent,
    FairComponent,
    UserComponent,
    SproductComponent,
    GetConfirmComponent,
    SproductComponent,ProductFromComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,

    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
  FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
