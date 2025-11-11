import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BABa } from './b-a-ba';

describe('BABa', () => {
  let component: BABa;
  let fixture: ComponentFixture<BABa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BABa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BABa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
