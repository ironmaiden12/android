import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-devoluciones',
  templateUrl: './devoluciones.page.html',
  styleUrls: ['./devoluciones.page.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('600ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class DevolucionesPage implements OnInit {

  ownedProducts: any[] = [
    { id: '1', name: 'Laptop XYZ', img: 'path_to_laptop_img', owner: 'user1', token: 'token123' },
    { id: '2', name: 'Celular ABC', img: 'path_to_cellphone_img', owner: 'user2', token: 'token456' }
    // ... otros productos
  ];

  currentUser: string = 'user1'; // El usuario actual, esto puede venir de una autenticación real.

  firstSelectedProduct: any = null;
  secondSelectedProduct: any = null;

  tradeStatus: 'selecting' | 'confirming' = 'selecting';

  constructor() { }

  ngOnInit() {
  }

  selectProduct(product: any) {
    if (product.owner === this.currentUser && !this.firstSelectedProduct) {
      this.firstSelectedProduct = product;
    } else if (product.owner !== this.currentUser && !this.secondSelectedProduct) {
      this.secondSelectedProduct = product;
      this.tradeStatus = 'confirming';
    }
  }

  confirmTrade() {
    if (this.firstSelectedProduct && this.secondSelectedProduct) {
      // Swap tokens
      const tempToken = this.firstSelectedProduct.token;
      this.firstSelectedProduct.token = this.secondSelectedProduct.token;
      this.secondSelectedProduct.token = tempToken;

      // Swap owners
      const tempOwner = this.firstSelectedProduct.owner;
      this.firstSelectedProduct.owner = this.secondSelectedProduct.owner;
      this.secondSelectedProduct.owner = tempOwner;

      // Ideally, you would now update this in a real blockchain or database to confirm the trade.
      // For now, we will just alert the user.
      alert(`Has intercambiado ${this.firstSelectedProduct.name} por ${this.secondSelectedProduct.name}`);
      this.resetTrade();
    }
  }

  resetTrade() {
    this.firstSelectedProduct = null;
    this.secondSelectedProduct = null;
    this.tradeStatus = 'selecting';
  }

}
