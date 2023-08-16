import { Injectable } from '@angular/core';
import { isPlatform } from '@ionic/angular';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { BehaviorSubject } from 'rxjs';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
export interface User {
  picture?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    if (!isPlatform('capacitor')) {
      GoogleAuth.initialize();
    }
    this.loadUser();
  }

  async signIn() {
    try {
      const googleUser = await GoogleAuth.signIn();
      const user = {
        picture: googleUser.imageUrl,
        firstName: googleUser.givenName,
        lastName: googleUser.familyName,
        email: googleUser.email
      };
      localStorage.setItem('user', JSON.stringify(user)); // Almacena el usuario en localStorage
      this.userSubject.next(user); // Actualiza el BehaviorSubject
      return user;
    } catch (error: any) {
      if (error && typeof error === 'object' && error.error === 'popup_closed_by_user') {
        console.log('El usuario cerró la ventana de autenticación antes de completar el proceso.');
      } else {
        console.error(error);
      }
      return null;
    }
  }

  signOut() {
    GoogleAuth.signOut().then(() => {
      localStorage.removeItem('user'); // Elimina el usuario de localStorage
      this.userSubject.next(null); // Actualiza el BehaviorSubject
    });
  }

  isAuthenticated(): boolean {
    return this.userSubject.value != null;
  }

  private loadUser() {
    const user = localStorage.getItem('user');
    if (user) {
      this.userSubject.next(JSON.parse(user)); // Actualiza el BehaviorSubject
    }
  }
}
