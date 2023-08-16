import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenucuponesPage } from './menucupones.page';

const routes: Routes = [
  {
    path: '',
    component: MenucuponesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenucuponesPageRoutingModule {}
