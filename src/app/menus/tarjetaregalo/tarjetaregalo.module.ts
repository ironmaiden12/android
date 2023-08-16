import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarjetaregaloPageRoutingModule } from './tarjetaregalo-routing.module';

import { TarjetaregaloPage } from './tarjetaregalo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarjetaregaloPageRoutingModule
  ],
  declarations: [TarjetaregaloPage]
})
export class TarjetaregaloPageModule {}
