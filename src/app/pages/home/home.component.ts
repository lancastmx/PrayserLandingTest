import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FOOTER_CONTENT } from './constants/footer-content'; // Ajusta la ruta según tu estructura de carpetas

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public footerContent = FOOTER_CONTENT;
}
