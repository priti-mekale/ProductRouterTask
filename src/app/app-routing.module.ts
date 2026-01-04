import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './sheard/components/user/user.component';
import { ProductFromComponent } from './sheard/components/product-form/product-form.component';

import { FairComponent } from './sheard/components/fair/fair.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
 
  
  {
    path:'product',
    component:ProductFromComponent,
    children:[
     {
      path:'addproduct',
      component:ProductFromComponent
     } ,
     
     
      {
      path:':productId/editProduct',
      component:ProductFromComponent
     },
     {
      path:':productId',
      component:ProductFromComponent
     }
    
    ]
  },
  {
    path:'fair',
    component:FairComponent
  },
   {
    path:'user',
    component:FairComponent
  },
  // {
  //   path:'page-not-found',
  //   component:PageNotFoundComponent
  // },
  // {
  //   path:'**',
  //   redirectTo: 'page-not-found',
  
    
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }