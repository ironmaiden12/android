import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenulistPageRoutingModule } from './menulist-routing.module';

import { MenulistPage } from './menulist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenulistPageRoutingModule
  ],
  declarations: [MenulistPage]
})
export class MenulistPageModule {}
