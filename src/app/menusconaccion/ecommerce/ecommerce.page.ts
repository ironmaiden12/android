import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.page.html',
  styleUrls: ['./ecommerce.page.scss'],
})
export class EcommercePage implements OnInit {
  cart: any[] = [];
  categories: string[] = ['Categoría 1', 'Categoría 2', 'Categoría 3'];
  selectedCategory: string | null = null;

  products: any[] = [
    { id: 1, name: 'Producto 1', category: 'Categoría 1', description: 'Descripción completa', price: 100, imageUrl: 'ruta_a_imagen_1.jpg' },
    // ... más productos
  ];

  constructor() { }

  ngOnInit() {}

  addToCart(product: any) {
    let existingProduct = this.cart.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      product.quantity = 1;
      this.cart.push(product);
    }
  }

  get cartCount() {
    return this.cart.reduce((acc, product) => acc + product.quantity, 0);
  }

  filterByCategory(event: Event) {
    const segmentEvent = event as CustomEvent;
    const category = segmentEvent.detail.value;
    this.selectedCategory = category === 'all' ? null : category;
  }
  
  
  showProductDetails(product: any) {
    // Implementa la lógica para mostrar detalles del producto aquí.
  }
  goToCart() {
    // Implementa la lógica para ir a la página del carrito o mostrar el carrito como un modal.
  }
    
}
