import { CommonModule } from '@angular/common';
import { Component, computed, Signal, signal } from '@angular/core';

interface Section {
  id: string;
  title: string;
  icon: string;
  description: string;
}
@Component({
  selector: 'app-funcionalidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './funcionalidades.component.html',
  styleUrls: ['./funcionalidades.component.css'],
})
export class FuncionalidadesComponent {
  /* ───────── Secciones del menú ────────────────────────────────────────── */
  readonly sections: Section[] = [
    {
      id: 'proveedores',
      title: 'Proveedores',
      icon: 'fa-solid fa-truck',
      description:
        'Gestiona la información de todas las empresas o personas que te suministran productos o servicios.',
    },
    {
      id: 'contactos',
      title: 'Contactos',
      icon: 'fa-solid fa-address-book',
      description:
        'Administra una lista general de contactos relevantes para tu negocio.',
    },
    {
      id: 'clientes',
      title: 'Clientes',
      icon: 'fa-solid fa-users',
      description:
        'Gestiona toda la información relacionada con tus compradores.',
    },
    {
      id: 'publicidad',
      title: 'Publicidad',
      icon: 'fa-solid fa-bullhorn',
      description:
        'Registra y organiza la información sobre tus campañas publicitarias.',
    },
    {
      id: 'observaciones',
      title: 'Observaciones',
      icon: 'fa-solid fa-clipboard',
      description:
        'Espacio flexible para notas, comentarios o recordatorios importantes.',
    },
    {
      id: 'productos',
      title: 'Productos / Servicios',
      icon: 'fa-solid fa-box',
      description: 'Administra el catálogo de lo que ofreces a tus clientes.',
    },
    {
      id: 'formatos',
      title: 'Formatos',
      icon: 'fa-solid fa-file-lines',
      description: 'Gestiona las plantillas de documentos de tu negocio.',
    },
  ];

  /* ───────── Estado reactivo ──────────────────────────────────────────── */
  private readonly _active = signal<string>('proveedores');
  readonly activeSection: Signal<string> = this._active.asReadonly();
  readonly current = computed(
    () => this.sections.find((s) => s.id === this._active()) as Section,
  );

  setActiveSection(id: string) {
    this._active.set(id);
  }

  /* Sidebar mobile */
  sidebarOpen = signal(false);
  toggleSidebar(show?: boolean) {
    this.sidebarOpen.set(show ?? !this.sidebarOpen());
  }
}
