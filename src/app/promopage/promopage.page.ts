import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-promopage',
  templateUrl: './promopage.page.html',
  styleUrls: ['./promopage.page.scss'],
})
export class PromopagePage implements OnInit {
  qrResult: any = null; // Cambiado de qrData a qrResult

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.modalController.getTop().then((modalInstance) => {
      if (modalInstance && modalInstance.componentProps && 'qrData' in modalInstance.componentProps) {
        this.qrResult = this.parseQrData(modalInstance.componentProps['qrData']);
        console.log(this.qrResult);
      }
    });
  }

  handleQrCodeResult(resultString: string) {
    this.qrResult = this.parseQrData(resultString);
  }

  parseQrData(rawData: string): string {
    try {
      let data = JSON.parse(rawData);
      return `Nombre: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nImagen: ${data.picture}`;
    } catch (e) {
      console.log(e);
      return "Error en el análisis del QR";
    }
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
