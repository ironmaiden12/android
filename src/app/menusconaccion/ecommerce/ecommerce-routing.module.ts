import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcommercePage } from './ecommerce.page';

const routes: Routes = [
  {
    path: '',
    component: EcommercePage
  },
  {
    path: 'productdetail',
    loadChildren: () => import('./productdetail/productdetail.module').then( m => m.ProductdetailPageModule)
  },
  {
    path: 'cartpage',
    loadChildren: () => import('./cartpage/cartpage.module').then( m => m.CartpagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcommercePageRoutingModule {}
