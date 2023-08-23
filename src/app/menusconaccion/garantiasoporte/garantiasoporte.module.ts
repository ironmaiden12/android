import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GarantiasoportePageRoutingModule } from './garantiasoporte-routing.module';

import { GarantiasoportePage } from './garantiasoporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GarantiasoportePageRoutingModule,
    
  ],
  declarations: [GarantiasoportePage]
})
export class GarantiasoportePageModule {}
