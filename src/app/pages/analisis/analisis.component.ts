import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Ventaja {
  title: string;
  text: string;
}

interface PropuestaValor {
  icon: string; // clase de Boxicon
  title: string;
  text: string;
}

interface Plataforma {
  name: string;
  purpose: string;
}

interface Kpi {
  stage: string;
  kpi: string;
  full?: string;
}
interface Competidor {
  type: 'Directa' | 'Indirecta';
  name: string;
  features: string;
  diff: string;
}
interface VentajaClave {
  elemento: string;
  ventaja: string;
}
@Component({
  selector: 'app-analisis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css'],
})
export class AnalisisComponent {
  /* ---------- data dinámico ---------- */
  ventajas: Ventaja[] = [
    { title: 'Más Simple y Accesible', text: 'Que Quoters o CRMs robustos.' },
    {
      title: 'Mejor Catálogo y UX',
      text: 'Más robusto y UX que ProCotizador.',
    },
    { title: 'Mayor Personalización', text: 'Precios y plantillas flexibles.' },
    { title: 'Automatización vs Manual', text: 'Adiós Excel + PDF.' },
    { title: 'Enfoque Específico', text: 'Ligero, 100% cotizaciones.' },
  ];

  propuestaValor: PropuestaValor[] = [
    {
      icon: 'bx bx-mobile-alt',
      title: 'Simplicidad y UX',
      text: 'Interfaz móvil friendly.',
    },
    {
      icon: 'bx bx-rocket',
      title: 'Velocidad',
      text: 'Cotiza en menos de 1.min.',
    },
    {
      icon: 'bx bx-paint',
      title: 'Personalización',
      text: 'Plantillas y banners.',
    },
    {
      icon: 'bx bx-collection',
      title: 'Todo en uno',
      text: 'Catálogo + clientes.',
    },
    {
      icon: 'bx bx-universal-access',
      title: 'Democratización',
      text: 'Tech top para PYMES.',
    },
    {
      icon: 'bx bx-support',
      title: 'Soporte Humano',
      text: 'Acompañamiento real.',
    },
  ];

  triggers: string[] = [
    'Del Excel al software por frustración.',
    'Personalizar precios por cliente.',
    'Cotizar rápido y móvil.',
    'Harto de plataformas caras o complejas.',
  ];

  plataformas: Plataforma[] = [
    { name: 'LinkedIn Ads', purpose: 'B2B' },
    { name: 'Google Ads', purpose: 'Search & Display' },
    { name: 'Facebook Ads', purpose: 'PYMES' },
    { name: 'Instagram Ads', purpose: 'PYMES' },
    { name: 'YouTube Ads', purpose: 'Educación' },
    { name: 'TikTok Ads', purpose: 'Adaptado' },
    { name: 'Email Marketing', purpose: 'Seguimiento' },
  ];

  kpis: Kpi[] = [
    { stage: 'Awareness', kpi: 'CPM', full: 'Costo por Mil' },
    { stage: 'Consideración', kpi: 'CPL', full: 'Costo por Lead' },
    { stage: 'Conversión', kpi: 'CPA', full: 'Costo por Adquisición' },
    { stage: 'Retención / Activación', kpi: 'Tasa de Activación' },
    { stage: 'Ventas / ROI', kpi: 'ROAS', full: 'Return on Ad Spend' },
  ];

  competidores: Competidor[] = [
    {
      type: 'Directa',
      name: 'Quoters',
      features: 'Branding, métricas, CRM ventas complejas',
      diff: 'Prayser → simple y accesible',
    },
    {
      type: 'Directa',
      name: 'ProCotizador',
      features: 'Plantillas + CRM básico',
      diff: 'Prayser → catálogo robusto + mejor UX',
    },
    {
      type: 'Directa',
      name: 'WeQuote',
      features: 'Propuestas digitales + pagos',
      diff: 'Prayser → +personalización de precios y fichas',
    },
    {
      type: 'Indirecta',
      name: 'HubSpot CRM (free)',
      features: 'Cotizaciones integradas',
      diff: 'Prayser → ágil y enfocado en cotizar',
    },
    {
      type: 'Indirecta',
      name: 'Excel + PDF',
      features: 'Gratis pero manual',
      diff: 'Prayser → automatiza y profesionaliza',
    },
    {
      type: 'Indirecta',
      name: 'Zoho / Bitrix24',
      features: 'CRM robusto',
      diff: 'Prayser → fácil de implementar',
    },
  ];

  analisisComparativo = [
    {
      name: 'Shipday',
      ventaja: 'Gestión de entregas última milla',
      diff: 'Prayser enfocado a cotización, no logística',
    },
    {
      name: 'Escala',
      ventaja: 'CRM + marketing IA',
      diff: 'Prayser simplifica ventas sin complejidad CRM',
    },
    {
      name: 'Prolibu',
      ventaja: 'Propuestas inteligentes en tiempo real',
      diff: 'Prayser → rapidez y simplicidad para PYMES',
    },
    {
      name: 'Keybe',
      ventaja: 'CRM B2B + IA predictiva',
      diff: 'Prayser → curva de aprendizaje baja',
    },
    {
      name: 'HubSpot',
      ventaja: 'Suite integral marketing/ventas',
      diff: 'Prayser → solución asequible y específica',
    },
    {
      name: 'CotizacionOnline',
      ventaja: 'Gratis, PDF básico',
      diff: 'Prayser → listas de precios + fichas + banners',
    },
    {
      name: 'Bling',
      ventaja: 'ERP multicanal + facturación',
      diff: 'Prayser → ligero, sin ser ERP completo',
    },
  ];

  ventajasClave: VentajaClave[] = [
    { elemento: 'Simplicidad & UX', ventaja: 'Interfaz intuitiva 100 % móvil' },
    { elemento: 'Velocidad', ventaja: 'Cotizaciones < 1 min' },
    {
      elemento: 'Personalización',
      ventaja: 'Precios diferenciados y plantillas 100 % editables',
    },
    {
      elemento: 'Todo en uno para cotizar',
      ventaja: 'Listas de precios + fichas + clientes',
    },
    {
      elemento: 'Democratización tecnológica',
      ventaja: 'Herramienta pro a costo accesible',
    },
    { elemento: 'Soporte cercano y humano', ventaja: 'Atención personalizada' },
  ];
  /* ---------- UI ---------- */
  sidebarOpen = false;

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  scrollTo(section: string): void {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    this.closeSidebarOnMobile();
  }

  @HostListener('window:resize')
  closeSidebarOnMobile(): void {
    if (window.innerWidth < 768) this.sidebarOpen = false;
  }
}
