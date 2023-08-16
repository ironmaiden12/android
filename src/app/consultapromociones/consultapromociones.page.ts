import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';
import { BarcodeFormat } from '@zxing/library';
import * as Papa from 'papaparse';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consultapromociones',
  templateUrl: './consultapromociones.page.html',
  styleUrls: ['./consultapromociones.page.scss'],
})
export class ConsultapromocionesPage implements AfterViewInit {

  @ViewChild('scanner', { static: false })
  scanner!: ZXingScannerComponent;
  hasDevices: boolean = false;
  hasPermission: boolean = false;
  qrResultString!: string;
  availableDevices!: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo | undefined = undefined;
  scannerEnabled: boolean = false;
  qrResult: any = null;
  notFoundMessage: string | null = null;
  isLoading: boolean = false;
  public scannerFormats = [
    BarcodeFormat.QR_CODE,
    BarcodeFormat.EAN_13,
    BarcodeFormat.CODE_128, // Superset de GS1-128
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.CODE_39,
    BarcodeFormat.CODE_93,
    BarcodeFormat.ITF, // Similar a ITF-14
  ];
  
  
  
  
  constructor(private http: HttpClient) { }

  ngAfterViewInit() {
    this.checkAndInitializeScanner();
  }

  onDeviceSelectChange(selectedValue: string) {
    console.debug('Selection changed: ', selectedValue);
    const device = this.availableDevices.find(device => device.deviceId === selectedValue);
    if (device) {
      this.currentDevice = device;
    } else {
      console.error('Device not found!');
    }
  }

  enableScanner() {
    this.scannerEnabled = true;
    this.checkAndInitializeScanner();
  }

  disableScanner() {
    this.scannerEnabled = false;
  }

  private checkAndInitializeScanner() {
    if (this.scanner) {
      this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
        this.hasDevices = true;
        this.availableDevices = devices;
        this.currentDevice = devices[0];
      });
  
      this.scanner.camerasNotFound.subscribe((devices: MediaDeviceInfo[]) => {
        console.error('An error has occurred when trying to enumerate your video-stream-enabled devices.');
      });
  
      this.scanner.scanComplete.subscribe((result: Result) => {
        if (result) {
          this.qrResultString = result.getText();
          this.handleQrCodeResult(this.qrResultString); // Llamamos a handleQrCodeResult cuando se completa el escaneo
        }
      });
  
      this.scanner.permissionResponse.subscribe((perm: boolean) => {
        this.hasPermission = perm;
        if (perm) {
          this.scannerEnabled = true;
        } else {
          this.scannerEnabled = false;
        }
      });
    }
  }
  
  handleQrCodeResult(resultString: string) {
    // Establecer isLoading en true para iniciar el indicador de carga
    this.isLoading = true;
  
    // Elimina '0' al principio si lo hay
    if (resultString.startsWith('0')) {
      resultString = resultString.substring(1);
    }
  
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTSCrjzSKZg5_D9hwmFzaQzk8Q7PPhSXNdmEwr4yOZqM8el487BsHl40voqT1G4oM3xMnVweFWwAzKM/pub?output=csv';
  
    this.http.get(csvUrl, {responseType: 'text'}).subscribe(csvData => {
      Papa.parse(csvData, {
        header: true,
        dynamicTyping: true,
        complete: (results: any) => {
          const data = results.data;
          console.log(data); // imprime los datos analizados
  
          // Buscamos el resultado del escaneo en los datos de la hoja de cálculo
          const found = data.find((row: any) => String(row['codigo']) === String(resultString));
  
          if (found) {
            // Si encontramos una coincidencia, la asignamos a qrResult
            this.qrResult = found;
            this.notFoundMessage = null;
          } else {
            console.warn('No se encontró una coincidencia para el código escaneado:', resultString);
            this.notFoundMessage = 'No se encontró una coincidencia para el código escaneado: ' + resultString;
          }
          // Una vez que hemos terminado de manejar el resultado, establecemos isLoading en false para detener el indicador de carga
          this.isLoading = false;
        }
      });
    });
  }
  
  
}