import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GarantiasoportePage } from './garantiasoporte.page';

const routes: Routes = [
  {
    path: '',
    component: GarantiasoportePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GarantiasoportePageRoutingModule {}
