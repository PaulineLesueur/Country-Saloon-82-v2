import { Component, OnInit } from '@angular/core';
import { TestService } from '../../core/services/test.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Test Firestore</h3>
    <p *ngIf="testString; else loading">{{ testString }}</p>
    <ng-template #loading><p>Chargement...</p></ng-template>
  `
})
export class Test implements OnInit {
  testString: string | null = null;

  constructor(private testService: TestService) {}

  async ngOnInit() {
    this.testString = await this.testService.getTestString();
  }
}
