import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  balance: number = 50; // Por ejemplo
  selectedProduct: any = null;
  blockchain: any = {
    productsTokenized: []
  };
  categories: any[] = [
    {
      name: 'Equipos de Cómputo',
      items: [
        { id: 'PC001', name: 'Laptop ASUS', details: '16GB RAM, 512GB SSD' },
        { id: 'PC002', name: 'Desktop Dell', details: '32GB RAM, 1TB HDD' },
      ]
    },
    {
      name: 'Celulares',
      items: [
        { id: 'MB001', name: 'iPhone 13', details: '256GB, Blue' },
        { id: 'MB002', name: 'Samsung Galaxy S22', details: '128GB, Black' },
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
    this.fetchBalance();
  }

  fetchBalance() {
    // Simulando la conexión a la blockchain/API.
  }

  selectProduct(product: any) {
    this.selectedProduct = product;
  }

  removeProduct(category: any, productIndex: number) {
    category.items.splice(productIndex, 1);
  }

  addProduct(category: any) {
    // Por simplicidad, añadiremos un producto genérico. En la realidad, esto debería abrir un modal o una página para añadir detalles del producto.
    category.items.push({ id: 'GEN001', name: 'Producto Genérico', details: 'Detalles genéricos' });
  }
  isProductTokenized(productID: string): boolean {
    return this.blockchain.productsTokenized.includes(productID);
  }

  tokenizeProduct(product: any) {
    // En un caso real: this.blockchainService.tokenizeProduct(product.id).subscribe(...)
    this.blockchain.productsTokenized.push(product.id);
  }
}