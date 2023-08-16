import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UpdateModalPage } from '../update-modal/update-modal.page';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  // Definir la versión actual de la aplicación.
  currentVersion = '1.0.3';

  // Definir la versión más reciente de la aplicación. Deberías cambiar esto cada vez que lances una nueva versión.
  latestVersion = '1.0.3';

  constructor(private modalCtrl: ModalController) {}

  checkForUpdates() {
    // Comparar la versión más reciente con la versión actual.
    if (this.latestVersion !== this.currentVersion) {
      // Si las versiones no coinciden, entonces hay una actualización disponible.
      this.showUpdateModal();
    }
  }
 
  async showUpdateModal() {
    const modal = await this.modalCtrl.create({
      component: UpdateModalPage,
    });
    await modal.present();
  }
}
