import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './sheard/components/user/user.component';
import { ProductFromComponent } from './sheard/components/product-form/product-form.component';

import { FairComponent } from './sheard/components/fair/fair.component';
import { HomeComponent } from './sheard/components/home/home.component';
import {  ProductDashboardComponent } from './sheard/components/product-dashboard/product-dashboard.component';
import { SingleProductComponent,  } from './sheard/components/single-product/single-product.component';
import { PageNotFoundComponent } from './sheard/components/page-not-found/page-not-found.component';


const appRoutes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent
  },

  
  {
    path: 'fairs',
    component: FairComponent
  },


{
  path: 'products',
  component: ProductDashboardComponent,
  children: [
    {
      path: 'addProducts',
      component: ProductFromComponent
    },
     {
      path: ':productId',
      component: SingleProductComponent
    },
    {
      path: ':productId/edit',
      component: ProductFromComponent
    },
   
  ]
}

,

  {
    path: 'users',
    component: UserComponent
  },

  
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },

  // ✅ Always keep this LAST
  {
    path: '**',
    redirectTo: 'page-not-found'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }