import {
  Component,
  signal,
  WritableSignal,
  HostListener,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common'; // Importar isPlatformBrowser

export interface SlideDefinition {
  id: string;
  navButtonTitle: string;
  contentTitle: string;
  isTitleSlide?: boolean;
  logoSrc?: string;
  paragraphs?: string[];
  listItems?: string[];
}

@Component({
  selector: 'app-conocenos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conocenos.component.html',
  styleUrls: ['./conocenos.component.css'],
})
export class ConocenosComponent {
  // --- ÚNICA FUENTE DE DATOS PARA TODOS LOS SLIDES ---
  readonly allSlidesData: SlideDefinition[] = [
    {
      id: 'slide1',
      navButtonTitle: 'Título',
      contentTitle:
        'Adiós Excel, Hola Simplicidad: Prayser, Tu Plataforma Inteligente de Cotización',
      isTitleSlide: true,
      logoSrc: 'https://placehold.co/250x75/E0F2F1/047857?text=LogoPrayser',
    },
    {
      id: 'slide2',
      navButtonTitle: '¿Qué es Prayser?',
      contentTitle: '¿Qué es Prayser?',
      paragraphs: [
        'Prayser es una plataforma 100% online que facilita el proceso de ventas a través de una interfaz amigable, eficaz y eficiente.',
        'Surge de la necesidad de ofrecer una herramienta que simplifique el proceso de cotizar para empresas de todo tipo.',
        'Su giro y propósito son cotizar, gestionar y vender, impulsando la transformación digital en las empresas.',
        'Prayser se define como una plataforma inteligente de cotización que automatiza, centraliza y acelera los procesos comerciales.',
      ],
    },
    {
      id: 'slide3',
      navButtonTitle: 'Funcionalidades',
      contentTitle: '¿Qué hace Prayser? (Funcionalidades Clave)',
      listItems: [
        '<span class="font-semibold">Gestión de Catálogos:</span> Permite administrar catálogos de proveedores, contactos, clientes y productos de manera sencilla y organizada.',
        '<span class="font-semibold">Gestión de Usuarios:</span> Ofrece la administración de usuarios dentro de la plataforma.',
        '<span class="font-semibold">Módulo de Cotización:</span> Facilita la creación de cotizaciones de manera rápida y sin complicaciones.',
        '<span class="font-semibold">Tablero Kanban:</span> Proporciona un tablero Kanban para la gestión visual de procesos.',
        '<span class="font-semibold">Service Dock:</span> Un módulo para compartir de manera digital la cotización y su información relacionada con el cliente final.',
        '<span class="font-semibold">Gestión de Productos y Servicios:</span> Permite administrar productos y servicios con facilidad y rapidez.',
        '<span class="font-semibold">Control de Inventarios:</span> Aunque mencionado, el nivel de funcionalidad específica no se detalla.',
        '<span class="font-semibold">Procesamiento de Pedidos:</span> Ayuda a manejar las ventas con eficiencia y claridad.',
      ],
    },
    {
      id: 'slide4',
      navButtonTitle: 'Beneficios',
      contentTitle: '¿Cuáles son los Beneficios de Prayser?',
      listItems: [
        '<span class="font-semibold">Simplicidad:</span> Su principal fortaleza es una experiencia de usuario simplificada e intuitiva.',
        '<span class="font-semibold">Eficiencia:</span> Facilita el proceso de cotizar, ahorrando tiempo y esfuerzo.',
        '<span class="font-semibold">Centralización:</span> Permite centralizar la información de proveedores y clientes en un solo espacio.',
        '<span class="font-semibold">Modernización:</span> Moderniza la forma en que se presentan las propuestas de negocio a los clientes.',
        '<span class="font-semibold">Conexión:</span> Conecta clientes y proveedores para una mejor comunicación.',
        '<span class="font-semibold">Control:</span> Ayuda a controlar cada proceso del negocio sencillamente.',
        '<span class="font-semibold">Transformación Digital:</span> Impulsa la transformación digital en las empresas.',
      ],
    },
    {
      id: 'slide5',
      navButtonTitle: 'Público Objetivo',
      contentTitle: '¿Para Quién es Prayser? (Público Objetivo)',
      paragraphs: [
        'El público objetivo no se limita por edad o género, sino por un conocimiento básico de computación y uso de tecnologías (usuarios básicos hasta avanzados).',
        'Incluye profesionales independientes, pequeños negocios (como misceláneas y ferreterías), y mediana y gran industria.',
        'Está dirigido a empresas que deseen abandonar los medios de control manual y adoptar herramientas especializadas para impulsar la transformación digital.',
      ],
    },
    {
      id: 'slide6',
      navButtonTitle: '¿Qué Diferencia a Prayser?',
      contentTitle: '¿Qué Diferencia a Prayser?',
      paragraphs: [
        'Busca alejarse de la percepción de productos con motes técnicos como CRM o ERP, para ser cercano a clientes especializados y no especializados.',
        'No quiere percibirse como un producto complejo o difícil, ni encasillarse como una solución solo para empresas grandes o pequeñas, sino para todo tipo de industria.',
        'Su solución parte de requerimientos de negocio testeados a través de su propia empresa y la experiencia desarrollada con clientes de implementación.',
      ],
    },
    {
      id: 'slide7',
      navButtonTitle: 'Precio',
      contentTitle: 'Precio de Prayser',
      paragraphs: [
        'Ofrece una prueba inicial por un precio muy bajo (<span class="font-bold">$10.00 pesos mexicanos</span>).',
        'Después del primer mes, el precio es de <span class="font-bold">$345.00 pesos mexicanos</span>.',
      ],
    },
    {
      id: 'slide8',
      navButtonTitle: 'Contexto',
      contentTitle: 'Prayser en el Contexto de Software de Cotizaciones y CRM',
      paragraphs: [
        'Prayser se enfoca en ser una plataforma amigable y eficiente para la gestión de cotizaciones.',
        'Mientras que existen softwares de CRM (Customer Relationship Management) que también pueden incluir funcionalidades de cotización y gestión de clientes, Prayser busca la simplicidad y accesibilidad para usuarios que quizás no necesiten la complejidad de un CRM completo.',
        'Otras soluciones de software de cotizaciones mencionadas incluyen DataCRM, HubSpot, Salesforce, Proposify y Qwilr, algunas de las cuales se integran con CRMs. Prayser busca destacarse por su simplicidad y por no identificarse con términos técnicos.',
        'HubSpot también ofrece un software para cotizaciones que se integra con su CRM gratuito, permitiendo completar automáticamente las cotizaciones con datos del CRM. Prayser podría considerarse una alternativa para quienes buscan una solución más sencilla inicialmente.',
      ],
    },
    {
      id: 'slide9',
      navButtonTitle: 'Conclusión',
      contentTitle: 'Conclusión',
      paragraphs: [
        'Prayser simplifica la creación y gestión de cotizaciones, permitiendo a las empresas ganar tiempo y profesionalizar su proceso de ventas.',
        'Su enfoque en la facilidad de uso y su precio accesible lo convierten en una excelente opción para una amplia gama de negocios que buscan modernizar su gestión comercial sin complejidad.',
        '¡Prueba Prayser hoy y despídete de las complicaciones!',
      ],
    },
  ];

  private readonly _activeSlideIdSignal: WritableSignal<string>;
  readonly activeSlideId: ReturnType<WritableSignal<string>['asReadonly']>;
  public navMenuOpen = signal(false);
  public isMobileView = signal(false); // Nuevo signal para el estado de la vista móvil

  private readonly isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId); // Verifica si se ejecuta en el navegador

    this._activeSlideIdSignal = signal<string>(this.allSlidesData[0]?.id || '');
    this.activeSlideId = this._activeSlideIdSignal.asReadonly();

    this.checkScreenState(); // Llamada inicial para configurar los signals de UI
  }

  onNavButtonClick(slideId: string): void {
    this._activeSlideIdSignal.set(slideId);
    if (this.isMobileView()) {
      // Usa el signal isMobileView
      this.navMenuOpen.set(false);
    }
  }

  toggleNavMenu(): void {
    this.navMenuOpen.set(!this.navMenuOpen());
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkScreenState();
  }

  private checkScreenState(): void {
    if (this.isBrowser) {
      const isCurrentlyMobile = window.innerWidth < 1024; // lg breakpoint de Tailwind
      this.isMobileView.set(isCurrentlyMobile);

      if (!isCurrentlyMobile) {
        // Si no es móvil (lg y superior)
        this.navMenuOpen.set(true); // Mantenemos el menú de navegación de slides abierto
      }
      // Para pantallas móviles, el estado de navMenuOpen es manejado por toggleNavMenu
      // y por la lógica en onNavButtonClick. No lo forzamos aquí al redimensionar a móvil.
    } else {
      // Comportamiento por defecto si no es un navegador (ej. SSR)
      this.isMobileView.set(true); // Asumir móvil para SSR podría ser una opción segura
      this.navMenuOpen.set(false);
    }
  }
}
