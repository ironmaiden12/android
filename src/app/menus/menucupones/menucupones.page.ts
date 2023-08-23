import { Component, OnInit } from '@angular/core';
import { Cupon } from './cupon.interface';

@Component({
  selector: 'app-menucupones',
  templateUrl: './menucupones.page.html',
  styleUrls: ['./menucupones.page.scss'],
})
export class MenucuponesPage implements OnInit {
  newCupon: Cupon = {
    title: '',
    description: '',
    code: ''
  };
  
  cupones: Cupon[] = [
    {
      title: 'Descuento del 10%',
      description: 'Aprovecha un 10% de descuento en tu próxima compra.',
      code: 'DESC10'
    },
    {
      title: 'Envío Gratis',
      description: 'Obtén envío gratis en tu próximo pedido.',
      code: 'FREESHIP'
    }
  ];

  constructor() { }

  ngOnInit() {

  }

  addCupon() {
    if (this.newCupon.title && this.newCupon.description && this.newCupon.code) {
      this.cupones.push(this.newCupon);
      this.newCupon = {
        title: '',
        description: '',
        code: ''
      };
    } else {
      console.log('Todos los campos son obligatorios');
    }
  }
  removeCupon(index: number) {
    this.cupones.splice(index, 1);
  }
  
}

