import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../services/authguard.service';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { ConsultapromocionesPage } from '../consultapromociones/consultapromociones.page';
import { UbicacionesPage } from '../menus/ubicaciones/ubicaciones.page';
import { TarjetaregaloPage } from '../menus/tarjetaregalo/tarjetaregalo.page';
import { PoliticasPage } from '../menus/politicas/politicas.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user$ = this.authService.user$;
  user: User | null = null;
  
  constructor(private authService: AuthService, private modalController: ModalController) {
    // Nos suscribimos al observable para obtener el usuario cuando esté disponible
    this.authService.user$.subscribe(user => this.user = user);
  }

  ngOnInit() {
    // this.checkAuth(); 
  }
  sendWhatsAppMessage(event: Event) {
    // Prevenir el envío del formulario
    event.preventDefault();

    if (!this.user) {
      console.error('El usuario no está autenticado.');
      return;
    }

    const phoneNumber = '5574437321'; // Sustituir con el número de teléfono al que quieres enviar el mensaje
    const user = this.user!;
    const message = `Hola, mi nombre es ${user.firstName} ${user.lastName}. Quiero contactar a soporte.`;    const messageEncoded = encodeURIComponent(message);
    const url = `https://wa.me/52${phoneNumber}?text=${messageEncoded}`;
    window.open(url, "_blank");
  }

  // async checkAuth() {
  //   if (!this.authService.isAuthenticated()) {
  //     const modal = await this.modalController.create({
  //       component: LoginPage,
  //       cssClass: 'my-custom-modal'
  //     });
  //     return await modal.present();
  //   }
  // }

  async openConsultapromociones() {
    const modal = await this.modalController.create({
      component: ConsultapromocionesPage,
      cssClass: 'custom-modal'
    });
    return await modal.present();
  }
  async openUbicaciones() {
    const modal = await this.modalController.create({
      component: UbicacionesPage,
      cssClass: 'ubicaciones-custom-modal'
    });
    return await modal.present();
  }
  async openTarjetaRegalo() {
    const modal = await this.modalController.create({
      component: TarjetaregaloPage,
      cssClass: 'regalo-custom-modal'
    });
    return await modal.present();
  }
  async openPoliticas() {
    const modal = await this.modalController.create({
      component: PoliticasPage,
      cssClass: 'regalo-custom-modal'
    });
    return await modal.present();
  }
}
