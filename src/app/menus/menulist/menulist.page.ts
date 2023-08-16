import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenucuponesPage } from '../menucupones/menucupones.page';
import { MenupromocionesPage } from '../menupromociones/menupromociones.page';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.page.html',
  styleUrls: ['./menulist.page.scss'],
})
export class MenulistPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async openMenucuponesModal() {
    const modal = await this.modalController.create({
      component: MenucuponesPage
    });
    return await modal.present();
  }

  async openMenupromocionesModal() {
    const modal = await this.modalController.create({
      component: MenupromocionesPage
    });
    return await modal.present();
  }

}
