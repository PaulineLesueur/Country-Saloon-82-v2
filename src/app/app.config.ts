import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), 
    provideFirebaseApp(() => initializeApp(
      { 
        projectId: "country-saloon-82-aba94", 
        appId: "1:1013592832855:web:2946f125f35fbdddd05c12", 
        storageBucket: "country-saloon-82-aba94.firebasestorage.app", 
        apiKey: "AIzaSyDKFHM5G6shLZnAe-2xdXYTNobeyQCuiSk", 
        authDomain: "country-saloon-82-aba94.firebaseapp.com", 
        messagingSenderId: "1013592832855", 
        measurementId: "G-BSH9XW2P2D" 
      }
    )), 
      provideAuth(() => getAuth()), 
      provideFirestore(() => getFirestore())
  ]
};
