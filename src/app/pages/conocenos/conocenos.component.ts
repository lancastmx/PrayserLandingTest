import { Component, ElementRef, QueryList, Renderer2, ViewChildren, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-conocenos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conocenos.component.html',
  styleUrl: './conocenos.component.css'
})
export class ConocenosComponent implements OnInit {
  @ViewChildren('slide') slides!: QueryList<ElementRef>;
  @ViewChildren('navButton') navButtons!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    // Show the first slide by default
    this.navigate('slide1');
  }

  showSlide(slideId: string): void {
    this.slides.forEach(slide => {
      this.renderer.setStyle(slide.nativeElement, 'display', 'none');
    });
    const slideElement = this.el.nativeElement.querySelector(`#${slideId}`);
    if (slideElement) {
      this.renderer.setStyle(slideElement, 'display', 'block');
    }
  }

  activateButton(slideId: string): void {
    this.navButtons.forEach(button => {
      this.renderer.removeClass(button.nativeElement, 'active');
      this.renderer.setStyle(button.nativeElement, 'backgroundColor', '#e0e0e0');
      this.renderer.setStyle(button.nativeElement, 'color', '#3c4043');
      this.renderer.setStyle(button.nativeElement, 'borderColor', 'none');
    });
    const buttonElement = this.el.nativeElement.querySelector(`[data-slide="${slideId}"]`);
    if (buttonElement) {
      this.renderer.addClass(buttonElement, 'active');
      this.renderer.setStyle(buttonElement, 'backgroundColor', '#abd190');
      this.renderer.setStyle(buttonElement, 'color', '#124734');
      this.renderer.setStyle(buttonElement, 'borderColor', '#124734');
    }
  }

  navigate(slideId: string): void {
    this.showSlide(slideId);
    this.activateButton(slideId);
  }

  onNavButtonClick(event: Event): void {
    const target = event.target as HTMLElement;

    // Verificar si el elemento tiene el atributo 'data-slide'
    const slideId = target?.dataset?.['slide'];
    if (slideId) {
      this.navigate(slideId);
    } else {
      console.warn('El botón no tiene un atributo data-slide válido.');
    }
  }
}
