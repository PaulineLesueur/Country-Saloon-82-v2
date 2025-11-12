import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-b-a-ba',
  standalone: true,
  imports: [ButtonModule,TabsModule],
  templateUrl: './b-a-ba.html',
  styleUrl: './b-a-ba.sass',
})
export class BABa implements OnInit {
  constructor() {}

    ngOnInit() {
    }
}
