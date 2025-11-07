import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MenubarModule
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.sass',
})
export class Nav implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Accueil',
        routerLink: '/'
      },
      {
        label: 'B-A-BA de la Country'
      },
      {
        label: 'Agenda'
      },
      {
        label: 'Le Club',
        items: [
          {
            label: 'Présentation'
          },
          {
            label: 'Les cours'
          },
          {
            label: 'Les danses'
          },
          {
            label: 'Événements du club'
          }
        ]
      },
      {
        label: 'Connexion'
      }
    ]
  }
}
