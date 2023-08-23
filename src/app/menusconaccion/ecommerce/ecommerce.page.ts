import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductdetailPage } from './productdetail/productdetail.page';
import { CartpagePage } from './cartpage/cartpage.page';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.page.html',
  styleUrls: ['./ecommerce.page.scss'],
})
export class EcommercePage implements OnInit {
  cart: any[] = [];
  categories: string[] = ['Categoría 1', 'Categoría 2', 'Categoría 3'];
  selectedCategory: string | null = null;
  filteredProducts: any[] = [];
  products: any[] = [
    { id: 1, name: 'Producto 1', category: 'Categoría 1', description: 'Descripción completa', price: 100, imageUrl: 'ruta_a_imagen_1.jpg' },
    // ... más productos
  ];


  constructor(private modalController: ModalController) { }

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
  searchProducts(event: { target: { value: string; }; }) {
    const searchTerm = event.target.value.toLowerCase();
    if (!searchTerm) {
      this.filteredProducts = this.products;
      return;
    }
    this.filteredProducts = this.products.filter(product => {
      return product.name.toLowerCase().includes(searchTerm);
    });
  }
  
  async showProductDetails(product: any) {
    const modal = await this.modalController.create({
      component: ProductdetailPage,
      componentProps: {
        'product': product
      }
    });
    return await modal.present();
  }
  
  async goToCart() {
    const modal = await this.modalController.create({
      component: CartpagePage,
    });
    return await modal.present();
  }
  
}
