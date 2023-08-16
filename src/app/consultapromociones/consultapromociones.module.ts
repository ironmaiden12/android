import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultapromocionesPageRoutingModule } from './consultapromociones-routing.module';

import { ConsultapromocionesPage } from './consultapromociones.page';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultapromocionesPageRoutingModule,
    ZXingScannerModule,

  ],
  declarations: [ConsultapromocionesPage],
})
export class ConsultapromocionesPageModule {}
