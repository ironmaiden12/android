import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromopagePage } from './promopage.page';

const routes: Routes = [
  {
    path: '',
    component: PromopagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromopagePageRoutingModule {}
