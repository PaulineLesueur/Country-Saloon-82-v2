import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Nav } from "../nav/nav";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, Nav],
  templateUrl: './header.html',
  styleUrl: './header.sass',
})
export class Header {

}
