import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.page.html',
  styleUrls: ['./update-modal.page.scss'],
})
export class UpdateModalPage {

  constructor(private modalCtrl: ModalController) {}

  onUpdateClick() {
    // Aquí puedes poner el enlace a tu aplicación en la tienda de aplicaciones
    window.location.href = 'https://play.google.com/store/apps/details?id=com.rematech.app';
  }
}
