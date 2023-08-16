import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenupromocionesPageRoutingModule } from './menupromociones-routing.module';

import { MenupromocionesPage } from './menupromociones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenupromocionesPageRoutingModule
  ],
  declarations: [MenupromocionesPage]
})
export class MenupromocionesPageModule {}
