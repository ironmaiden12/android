// login.page.ts
import { Component, OnInit } from '@angular/core';
import { ModalController, isPlatform } from '@ionic/angular';
import { PromopagePage } from '../promopage/promopage.page';
import { Router } from '@angular/router';
import { AuthService } from '../services/authguard.service';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: any = null;
  isDarkTheme = false;

  constructor(private modalController: ModalController, private router: Router, private authService: AuthService) { // Inyectar AuthService
    if (!isPlatform('capacitor')) {
      GoogleAuth.initialize();
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.isDarkTheme = prefersDark.matches;
    prefersDark.addEventListener('change', (mediaQuery) => this.isDarkTheme = mediaQuery.matches);
  }
  

  async signIn() {
    try {
      const user = await this.authService.signIn(); // Usa authService.signIn
      console.log('user:', user);
      
      if (user) {
        // Redirige al usuario a la página de inicio después de iniciar sesión
        this.router.navigate(['/home']);
      }
    } catch (error: any) {
      console.error(error);
    }
    localStorage.setItem('isAuthenticated', 'true');
  }

  ngOnInit() {}

  async onPromoClick() {
    const modal = await this.modalController.create({
      component: PromopagePage,
      componentProps: {
        'qrData': JSON.stringify(this.user)
      },
      cssClass: 'custom-modal'
    });
    return await modal.present();
  }
}
