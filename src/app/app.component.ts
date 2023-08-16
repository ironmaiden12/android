import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PromopagePage } from './promopage/promopage.page';
import { AuthService } from './services/authguard.service';
import { Subscription } from 'rxjs';
import { UpdateService } from './update-modal/update.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  activePage: string = 'home'; 
  showMenu = false;
  user: any = null;
  private userSubscription!: Subscription;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private authService: AuthService,
    private updateService: UpdateService
  ) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.showMenu = val.url !== '/login';
        // this.updateService.checkForUpdates();
    
        // Actualiza activePage según la URL
        if (val.url.startsWith('/home')) {
          this.activePage = 'home';
        } else if (val.url.startsWith('/profile')) {
          this.activePage = 'profile';
        } // Puedes agregar más condiciones según sea necesario
      }
    });
    

    this.initializeApp(); // Llama a initializeApp en el constructor
  }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  initializeApp() {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
      this.router.navigate(['/home']);
    }
  
    this.updateService.checkForUpdates(); // Verificar actualizaciones aquí
  }
  

  async onPromoClick() {
    this.activePage = 'promo'; // Establecer como página activa
    const modal = await this.modalController.create({
      component: PromopagePage,
      componentProps: {
        'qrData': JSON.stringify(this.user)
      },
      cssClass: 'custom-modal' // Aquí especificas tu clase personalizada
    });
    return await modal.present();
  }
  onHomeClick() {
    this.activePage = 'home';
    this.router.navigate(['/home']);
  }
  
  onProfileClick() {
    this.activePage = 'profile';
    this.router.navigate(['/profile']);
  }
}
