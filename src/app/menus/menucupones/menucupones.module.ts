import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenucuponesPageRoutingModule } from './menucupones-routing.module';

import { MenucuponesPage } from './menucupones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenucuponesPageRoutingModule
  ],
  declarations: [MenucuponesPage]
})
export class MenucuponesPageModule {}
