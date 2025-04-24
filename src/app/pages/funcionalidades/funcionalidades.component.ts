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
  styleUrls: ['./funcionalidades.component.css']
})
export class FuncionalidadesComponent {
   /* ───────── Secciones del menú ────────────────────────────────────────── */
   readonly sections: Section[] = [
    { id: 'proveedores',  title: '1. Proveedores',          icon: 'fa-solid fa-truck',
      description: 'Gestiona la información de todas las empresas o personas que te suministran productos o servicios.' },
    { id: 'contactos',    title: '2. Contactos',            icon: 'fa-solid fa-address-book',
      description: 'Administra una lista general de contactos relevantes para tu negocio.' },
    { id: 'clientes',     title: '3. Clientes',             icon: 'fa-solid fa-users',
      description: 'Gestiona toda la información relacionada con tus compradores.' },
    { id: 'publicidad',   title: '4. Publicidad',           icon: 'fa-solid fa-bullhorn',
      description: 'Registra y organiza la información sobre tus campañas publicitarias.' },
    { id: 'observaciones',title: '5. Observaciones',        icon: 'fa-solid fa-clipboard',
      description: 'Espacio flexible para notas, comentarios o recordatorios importantes.' },
    { id: 'productos',    title: '6. Productos / Servicios',icon: 'fa-solid fa-box',
      description: 'Administra el catálogo de lo que ofreces a tus clientes.' },
    { id: 'formatos',     title: '7. Formatos',             icon: 'fa-solid fa-file-lines',
      description: 'Gestiona las plantillas de documentos de tu negocio.' },
  ];

  /* ───────── Estado reactivo ──────────────────────────────────────────── */
  private readonly _active = signal<string>('proveedores');
  readonly activeSection: Signal<string> = this._active.asReadonly();
  readonly current = computed(
    () => this.sections.find(s => s.id === this._active()) as Section
  );

  setActiveSection(id: string) {
    this._active.set(id);
  }

  /* Sidebar mobile */
  sidebarOpen = signal(false);
  toggleSidebar(show?: boolean) {
    this.sidebarOpen.set(show ?? !this.sidebarOpen());
  }
  contentData = [
    {
      id: 'proveedores',
      title: '1. Proveedores',
      icon: 'fas fa-truck',
      description: 'Gestiona la información de todas las empresas o personas que te suministran productos o servicios.'
    },
    {
      id: 'contactos',
      title: '2. Contactos',
      icon: 'fas fa-address-book',
      description: 'Administra una lista general de contactos relevantes para tu negocio.'
    },
    {
      id: 'clientes',
      title: '3. Clientes',
      icon: 'fas fa-users',
      description: 'Gestiona toda la información relacionada con las personas o empresas a las que vendes tus productos o servicios.'
    },
    {
      id: 'publicidad',
      title: '4. Publicidad',
      icon: 'fas fa-bullhorn',
      description: 'Registra y organiza la información sobre tus campañas y esfuerzos publicitarios.'
    },
    {
      id: 'observaciones',
      title: '5. Observaciones',
      icon: 'fas fa-clipboard',
      description: 'Un espacio flexible para registrar notas, comentarios o recordatorios importantes.'
    },
    {
      id: 'productos',
      title: '6. Productos / Servicios',
      icon: 'fas fa-box',
      description: 'Administra el catálogo detallado de lo que ofreces a tus clientes.'
    },
    {
      id: 'formatos',
      title: '7. Formatos',
      icon: 'fas fa-file-alt',
      description: 'Gestiona las plantillas o diseños predefinidos para tus documentos.'
    }
  ];

  activeTab: string = this.contentData[0].id;

  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
  }
}
