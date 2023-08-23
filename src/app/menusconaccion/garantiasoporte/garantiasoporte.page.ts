import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-garantiasoporte',
  templateUrl: './garantiasoporte.page.html',
  styleUrls: ['./garantiasoporte.page.scss'],
})
export class GarantiasoportePage implements OnInit {

  userName!: string;
  userEmail!: string;
  userMessage!: string;

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async submitSupportRequest() {
    // Aquí normalmente enviarías la información a tu backend o servicio de soporte.
    // Por ahora, simplemente mostramos una alerta.

    const alert = await this.alertController.create({
      header: 'Soporte',
      message: '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
