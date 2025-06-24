import {
  Component,
  OnDestroy,
  afterNextRender,
  ChangeDetectorRef,
} from '@angular/core'; // Importa ChangeDetectorRef
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FOOTER_CONTENT } from './constants/footer-content';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnDestroy {
  public footerContent = FOOTER_CONTENT;
  carouselImages = [
    {
      src: 'assets/image/webp_versions/Cartera-de-clientes.avif',
      alt: 'Gestiona tu cartera de Clientes',
      width: 1200,
      height: 800,
    },
    {
      src: 'assets/image/publicidad.png',
      alt: 'Publicidad Integrada en Prayser',
      width: 1200,
      height: 800,
    },
    {
      src: 'assets/image/productos-servicio.png',
      alt: 'Gestión de Productos y Servicios',
      width: 1200,
      height: 800,
    },
    {
      src: 'assets/image/plantillas.png',
      alt: 'Plantillas Personalizadas Prayser',
      width: 1200,
      height: 800,
    },
    // Añade más imágenes
  ];

  currentCarouselImageIndex = 0;
  private carouselAnimationSubscription!: Subscription;

  constructor(private cdr: ChangeDetectorRef) {
    // Inyecta ChangeDetectorRef aquí
    afterNextRender(() => {
      this.carouselAnimationSubscription = interval(3000).subscribe(() => {
        this.currentCarouselImageIndex =
          (this.currentCarouselImageIndex + 1) % this.carouselImages.length;
        this.cdr.detectChanges(); // ¡Esta línea es clave!
      });
    });
  }

  ngOnDestroy(): void {
    if (this.carouselAnimationSubscription) {
      this.carouselAnimationSubscription.unsubscribe();
    }
  }

  // Método para ir a una imagen específica (útil para los indicadores)
  goToSlide(index: number): void {
    this.currentCarouselImageIndex = index;
    this.cdr.detectChanges(); // También forzar detección de cambios para navegación manual
  }

  // Método para ir a la siguiente imagen
  nextSlide(): void {
    this.currentCarouselImageIndex =
      (this.currentCarouselImageIndex + 1) % this.carouselImages.length;
    this.cdr.detectChanges(); // También forzar detección de cambios para navegación manual
  }

  // Método para ir a la imagen anterior
  prevSlide(): void {
    this.currentCarouselImageIndex =
      (this.currentCarouselImageIndex - 1 + this.carouselImages.length) %
      this.carouselImages.length;
    this.cdr.detectChanges(); // También forzar detección de cambios para navegación manual
  }

  // Mantenemos tus otras propiedades si aún las usas
  animatedCardImages = [
    {
      url: 'assets/image/publicidad.png',
      rotation: '-rotate-12',
      alt: 'Image for Animated Card 2',
    },
    {
      url: 'assets/image/productos-servicio.png',
      rotation: 'rotate-6',
      alt: 'Image for Animated Card 3',
    },
    {
      url: 'assets/image/plantillas.png',
      rotation: '-rotate-12',
      alt: 'Image for Animated Card 4',
    },
  ];

  featureImages = {
    gestionContactos: 'assets/image/webp_versions/Cartera-de-clientes.avif',
    publicidadIntegrada: 'assets/image/publicidad.png',
    catalogo: 'assets/image/productos-servicio.png',
    formatosPersonalizados: 'assets/image/plantillas.png',
    usuariosEquipo: 'assets/image/webp_versions/Cartera-de-clientes.avif',
    gestionCotizaciones: 'assets/image/webp_versions/Cartera-de-clientes.avif',
    tableroKanban: 'assets/image/kanban.png',
    serviceDock: 'assets/image/siviceDock.png',
  };
  openWhatsApp(): void {
    const phoneNumber = '525564667408'; // Incluye el código de país (52 para México)
    const message = 'Hola, estoy interesado en Prayser y me gustaría más información.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}
