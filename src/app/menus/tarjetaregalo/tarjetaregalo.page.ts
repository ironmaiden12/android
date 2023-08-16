import { Component, OnInit } from '@angular/core';

interface GiftCard {
  id: number;
  amount: number;
  recipientEmail: string;
  expirationDate: Date;
}

@Component({
  selector: 'app-tarjetaregalo',
  templateUrl: './tarjetaregalo.page.html',
  styleUrls: ['./tarjetaregalo.page.scss'],
})
export class TarjetaregaloPage implements OnInit {
  
  giftCards: GiftCard[] = [
    { 
      id: 1, 
      amount: 100, 
      recipientEmail: 'juan@example.com', 
      expirationDate: new Date('2024-01-01') 
    },
    // Puedes añadir más tarjetas de regalo aquí
  ];

  constructor() { }

  ngOnInit() {
  }

}
