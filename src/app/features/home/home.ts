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
  images: { itemImgSrc: string; thumbnailImgSrc: string }[] = [];

  constructor(private homeService: HomeService) { }

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

    const photoUrls = await this.homeService.getGalleryPhotos();
    this.images = photoUrls.map((url: any) => ({
      itemImgSrc: url,
      thumbnailImgSrc: url
    }));
  }
}
