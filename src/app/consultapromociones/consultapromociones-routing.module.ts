import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultapromocionesPage } from './consultapromociones.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultapromocionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultapromocionesPageRoutingModule {}
