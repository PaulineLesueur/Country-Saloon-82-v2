import { Component, model, OnInit } from '@angular/core';
import { HomeService } from '../../core/services/home.service';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GalleriaModule],
  templateUrl: './home.html',
  styleUrl: './home.sass',
})
export class Home implements OnInit {
  links: any[] = [];
  private routes = ['/evenements', '/cours', '/danses'];
  presidentData = {
    speech: '',
    photoUrl: '',
    legend: ''
  };
  images: any[] = [];

  constructor(private homeService: HomeService) { 
    this.images = [
      { itemImgSrc: 'https://picsum.photos/id/1015/1280/720', thumbnailImgSrc: 'https://picsum.photos/id/1015/150/100' },
      { itemImgSrc: 'https://picsum.photos/id/1025/1280/720', thumbnailImgSrc: 'https://picsum.photos/id/1025/150/100' },
      { itemImgSrc: 'https://picsum.photos/id/1035/1280/720', thumbnailImgSrc: 'https://picsum.photos/id/1035/150/100' },
      { itemImgSrc: 'https://picsum.photos/id/1045/1280/720', thumbnailImgSrc: 'https://picsum.photos/id/1045/150/100' },
      { itemImgSrc: 'https://picsum.photos/id/1055/1280/720', thumbnailImgSrc: 'https://picsum.photos/id/1055/150/100' },
    ];
  }

  async ngOnInit() {
    const firebaseLinks = await this.homeService.getLinks() ?? [];
    console.log('Firestore renvoie :', firebaseLinks);
    this.links = firebaseLinks.map((link: any, index: number) => ({
      ...link,
      route: this.routes[index]
    }));
    
    const presidentRaw = await this.homeService.getPresidentSpeech();
    this.presidentData = {
      ...presidentRaw,
      speech: presidentRaw.speech ? presidentRaw.speech.replace(/\\n/g, '\n') : ''
    };
  }
}
