import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Importa Meta y Title para SEO
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit { // Implementa OnInit
  title = 'prayser-landing-test';

  // Inyecta los servicios Meta y Title en el constructor
  constructor(private metaService: Meta, private titleService: Title) {}

  ngOnInit(): void {
    // 1. Establece el título de la página
    // Este es el título que aparece en la pestaña del navegador y en los resultados de búsqueda.
    this.titleService.setTitle('Prayser: Simplifica tus Cotizaciones y Potencia tus Ventas | Soluciones CRM');

    // 2. Establece la metadescripción
    // Esta es la breve descripción que aparece debajo del título en los resultados de búsqueda.
    this.metaService.updateTag({
      name: 'description',
      content: 'La herramienta integral que optimiza tu proceso de ventas: crea cotizaciones profesionales al instante, gestiona ilimitadamente contactos, productos y servicios, moderniza tus propuestas para cerrar más negocios, todo en un solo lugar. ¡Empieza hoy mismo!',
    });

    // 3. Opcional: Añade Meta Tags para Redes Sociales (Open Graph y Twitter Cards)
    // Estas etiquetas son cruciales para controlar cómo se ve tu contenido cuando se comparte en redes sociales como Facebook, LinkedIn, Twitter, etc.
    this.metaService.updateTag({ property: 'og:title', content: 'Prayser: Cotiza • Gestiona • Vende' });
    this.metaService.updateTag({ property: 'og:description', content: 'La herramienta integral que optimiza tu proceso de ventas: crea cotizaciones profesionales al instante, gestiona contactos, productos y servicios, moderniza tus propuestas para cerrar más negocios.' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.prayser.com/' }); // **¡MUY IMPORTANTE! Cambia esto por la URL real de tu landing page.**
    this.metaService.updateTag({ property: 'og:image', content: 'https://www.prayser.com/assets/images/prayser-social-share.png' }); // **Crea una imagen de vista previa y pon la URL real aquí.**
    this.metaService.updateTag({ property: 'og:type', content: 'website' }); // Tipo de contenido

    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:site', content: '@KyclopsRadio' }); // Si tienes Twitter
    this.metaService.updateTag({ name: 'twitter:creator', content: '@TuUsuarioTwitter' }); // Si tienes Twitter
    this.metaService.updateTag({ name: 'twitter:title', content: 'Prayser: Simplifica tus Cotizaciones y Potencia tus Ventas' });
    this.metaService.updateTag({ name: 'twitter:description', content: 'La herramienta integral que optimiza tu proceso de ventas...' });
    this.metaService.updateTag({ name: 'twitter:image', content: 'https://www.prayser.com/assets/images/prayser-social-share.png' }); // La misma imagen de Open Graph

    // 4. Opcional: Añade la Canonical URL
    // Esto ayuda a evitar problemas de contenido duplicado si tu sitio es accesible a través de múltiples URLs.
    this.metaService.updateTag({ rel: 'canonical', href: 'https://www.prayser.com/' }); // **¡Cambia esto por la URL real de tu landing page!**
  }
}
