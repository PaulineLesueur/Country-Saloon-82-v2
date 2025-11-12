import { Component, Input, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Header } from "./shared/ui/header/header";
import { Footer } from "./shared/ui/footer/footer";
import { BreadcrumbService } from './core/services/breadcrumb.service';
import { filter } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from "./shared/components/breadcrumb/breadcrumb";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Breadcrumb],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})

export class App {
  protected readonly title = signal('web');
  breadcrumbItems: MenuItem[] = [];

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.updateBreadcrumb();
    });
  }

  updateBreadcrumb() {
    const url = this.router.url;

    if (url === '/') {
      this.breadcrumbItems = [];
      return;
    }

    this.breadcrumbItems = [
      { label: 'Accueil', routerLink: '/' },
    ];

    if (url.includes('b-a-ba')) {
      this.breadcrumbItems.push({ label: 'B-A-BA de la country' });
    } 
  }
}
