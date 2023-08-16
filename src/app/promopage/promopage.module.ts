import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromopagePageRoutingModule } from './promopage-routing.module';

import { PromopagePage } from './promopage.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromopagePageRoutingModule,
    QRCodeModule // No olvides incluir este módulo aquí
  ],
  declarations: [PromopagePage]
})
export class PromopagePageModule {}
