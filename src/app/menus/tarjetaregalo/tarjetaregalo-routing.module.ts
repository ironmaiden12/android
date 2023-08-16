import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarjetaregaloPage } from './tarjetaregalo.page';

const routes: Routes = [
  {
    path: '',
    component: TarjetaregaloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarjetaregaloPageRoutingModule {}
