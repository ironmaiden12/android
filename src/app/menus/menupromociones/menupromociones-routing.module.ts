import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenupromocionesPage } from './menupromociones.page';

const routes: Routes = [
  {
    path: '',
    component: MenupromocionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenupromocionesPageRoutingModule {}
