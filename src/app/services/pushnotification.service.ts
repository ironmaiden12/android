import { Injectable } from '@angular/core';
import { PushNotifications } from '@capacitor/push-notifications';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  constructor() {
    this.initPush();
  }

  initPush() {
    // Solicitar permisos para notificaciones push
    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        // Registro de notificaciones push
        PushNotifications.register();
      } else {
        // Manejar cuando los permisos no son otorgados
      }
    });

    // Escuchar la recepción de token
    PushNotifications.addListener('registration', (token) => {
      console.log('Token de notificación push:', token.value);
      // Aquí puedes guardar o enviar el token según lo necesites
    });

    // Escuchar la recepción de notificaciones push
    PushNotifications.addListener('pushNotificationReceived', (notification) => {
      console.log('Notificación recibida:', JSON.stringify(notification));
    
      // Extraer o asignar un valor predeterminado para el título y el cuerpo
      const title = notification.title ?? 'Título predeterminado';
      const body = notification.body ?? 'Cuerpo predeterminado';
    
      // Crear y mostrar la notificación local en la bandeja de entrada del dispositivo
    });

    // Escuchar la acción de notificaciones push
    PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
      console.log('Notificación accionada:', JSON.stringify(notification));
      // Aquí puedes manejar la acción, como navegar a una página específica
    });
  }
}
