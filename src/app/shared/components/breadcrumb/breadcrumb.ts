import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, BreadcrumbModule],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.sass',
})
export class Breadcrumb {
  @Input() items: MenuItem[] = [];
}
