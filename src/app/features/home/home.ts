import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../core/services/home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.sass',
})
export class Home implements OnInit {
  links: any[] = [];
  private routes = ['/evenements', '/cours', '/danses'];

  constructor(private homeService: HomeService) {}

  async ngOnInit() {
    const firebaseLinks = await this.homeService.getLinks() ?? [];
    console.log('Firestore renvoie :', firebaseLinks);
    this.links = firebaseLinks.map((link: any, index: number) => ({
      ...link,
      route: this.routes[index]
    }));
  }
}
