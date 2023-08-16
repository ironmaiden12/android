import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../services/authguard.service';
import { MenucuponesPage } from '../menus/menucupones/menucupones.page';
import { MenupromocionesPage } from '../menus/menupromociones/menupromociones.page';
import { LoginPage } from '../login/login.page';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user: any = null;
  username: any;

  constructor(private authService: AuthService, private modalController: ModalController) {}

  ngOnInit() {
    this.user = this.authService.user$;
    this.checkAuth(); // Añade la llamada al método checkAuth
    this.initializePushNotifications();
  }


  async openMenucuponesModal() {
    const modal = await this.modalController.create({
      component: MenucuponesPage,
      cssClass: 'custom-modal'
    });
    return await modal.present();
  }

  async openMenupromocionesModal() {
    const modal = await this.modalController.create({
      component: MenupromocionesPage,
      cssClass: 'custom-modal'
    });
    return await modal.present();
  }

  // Método para comprobar autenticación y mostrar LoginPage como un modal
  async checkAuth() {
    try {
      if (!this.authService.isAuthenticated()) {
        const modal = await this.modalController.create({
          component: LoginPage,
          cssClass: 'my-custom-modal'
        });
    
        return await modal.present();
      }
    } catch (error) {
      // Show error message to user
    }
  }
  

  private initializePushNotifications() {
  console.log('Initializing HomePage');

  // Recuperar el estado de registro de las notificaciones push desde el almacenamiento local
  const isRegistered = localStorage.getItem('registered');

  if (isRegistered !== 'true') { // Solo registrar si no está registrado previamente
    PushNotifications.requestPermissions().then((result) => {
      if (result.receive === 'granted') {
        PushNotifications.register();
        // Almacenar un indicador en el almacenamiento local para recordar que el registro ha sido exitoso
        localStorage.setItem('registered', 'true');
      } else {
        // Show some error
      }
    });
  }

  PushNotifications.addListener('registration', (token: Token) => {
    console.log('Push registration success, token: ' + token.value);
  });

  PushNotifications.addListener('registrationError', (error: any) => {
    if (error && error.message && error.message.includes('TOO_MANY_REGISTRATIONS')) {
      console.error('Demasiados registros para notificaciones push. Error:', error);
    } else {
      alert('Error en el registro: ' + JSON.stringify(error));
    }
  });

  PushNotifications.addListener('pushNotificationReceived', (notification: PushNotificationSchema) => {
    const title = notification.title || '';
    const body = notification.body || '';
    const message = `${title}\n${body}`;
    alert(message);
  });

  PushNotifications.addListener('pushNotificationActionPerformed', (notification: ActionPerformed) => {
    alert('Push action performed: ' + JSON.stringify(notification));
  });
}
}