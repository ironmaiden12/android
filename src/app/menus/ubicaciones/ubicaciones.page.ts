import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubicaciones',
  templateUrl: './ubicaciones.page.html',
  styleUrls: ['./ubicaciones.page.scss'],
})
export class UbicacionesPage implements OnInit {

  // Lista de tus tiendas con su URL de Google Maps
  tiendas = [
    { url: "https://www.google.com/maps/place/Rematech%C2%AE+Toluca/@19.2873246,-99.6499141,15z/data=!4m6!3m5!1s0x85cd8bbdb14dae5d:0xeec906ab2f74cbc0!8m2!3d19.2873246!4d-99.6499141!16s%2Fg%2F11qlgz6gkf?entry=ttu", nombre: "Rematech Toluca", descripcion: "Ubicación de la tienda en Toluca" },
    { url: "https://www.google.com/maps/place/Rematech+San+Mateo+Atenco/@19.2694709,-99.53346,17z/data=!3m1!4b1!4m6!3m5!1s0x85cdf5578c6caf59:0xd601d8c09e309246!8m2!3d19.2694659!4d-99.5308851!16s%2Fg%2F11t53sq6lz?entry=ttu", nombre: "Rematech San Mateo Atenco", descripcion: "Ubicación de la tienda en San Mateo Atenco" },
    { url: "https://www.google.com/maps/place/Rematech+Xonacatl%C3%A1n/@19.4029947,-99.5323114,17z/data=!3m1!4b1!4m6!3m5!1s0x85d20bbeecf6be85:0xf63862dd303c3f75!8m2!3d19.4029897!4d-99.5297365!16s%2Fg%2F11jy9l2vts?entry=ttu", nombre: "Rematech Xonacatlan", descripcion: "Ubicación de la tienda en Xonacatlan" },
    { url: "https://www.google.com/maps/place/Rematech+Jilotepec/@19.9526726,-99.5345296,17z/data=!3m1!4b1!4m6!3m5!1s0x85d237340cd17135:0xb98f6e693100ce7f!8m2!3d19.9526676!4d-99.5319547!16s%2Fg%2F11tk6f23_r?entry=ttu", nombre: "Rematech Jilotepec", descripcion: "Ubicación de la tienda en Jilotepec" },
    { url: "https://www.google.com/maps/place/Rematech+Atlacomulco/@19.7986185,-99.8749812,15z/data=!4m2!3m1!1s0x0:0xacb482f685906443?sa=X&ved=2ahUKEwiY7YTOxqqAAxVdIUQIHdPgANoQ_BJ6BAhCEAA&ved=2ahUKEwiY7YTOxqqAAxVdIUQIHdPgANoQ_BJ6BAhZEAg", nombre: "Rematech Atlacomulco", descripcion: "Ubicación de la tienda en Atlacomulco" },
    { url: "https://www.google.com/maps/place/Rematech+Tenancingo/@18.9618197,-99.5965813,17z/data=!3m1!4b1!4m6!3m5!1s0x85cd9583d7b27b4d:0xa83847dfe8b54c9a!8m2!3d18.9618146!4d-99.5940064!16s%2Fg%2F11s965gbr3?entry=ttu", nombre: "Rematech Tenancingo", descripcion: "Ubicación de la tienda en Tenancingo" },
    { url: "https://www.google.com/maps/place/Rematech+Valle+de+Bravo/@19.1975738,-100.1339756,17z/data=!3m1!4b1!4m6!3m5!1s0x85cd63c93b63a075:0xa0189b7f892a636e!8m2!3d19.1975688!4d-100.1314007!16s%2Fg%2F11tk6cc289?entry=ttu", nombre: "Rematech Valle de Bravo", descripcion: "Ubicación de la tienda en Valle de bravo" },
    { url: "https://www.google.com/maps/place/Rematech+Calimaya/@19.166489,-99.6222393,17z/data=!3m1!4b1!4m6!3m5!1s0x85cd8db65b9432f7:0xbe7cc7fd3cca2c48!8m2!3d19.166484!4d-99.6196644!16s%2Fg%2F11sc01_5h5?entry=ttu", nombre: "Rematech Calimaya", descripcion: "Ubicación de la tienda en Calimaya" },  
  ];

  constructor() { }

  ngOnInit() {
  }

  getGoogleMapsLink(url: string): string {
    return url;
  }
}
