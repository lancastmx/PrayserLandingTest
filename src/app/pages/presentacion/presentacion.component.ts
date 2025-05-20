import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.css',
})
export class PresentacionComponent {
  funcionalidades = [
    {
      title: 'Gestión de Productos',
      content:
        'Administra tu catálogo fácilmente. Carga y organiza tus productos o servicios de manera sencilla.',
      icon: 'fas fa-box-open',
      isOpen: true,
    },
    {
      title: 'Módulo de Cotización',
      content:
        'Crea cotizaciones profesionales en minutos con formatos personalizables. ¡Adiós Excel!',
      icon: 'fas fa-file-invoice-dollar',
      isOpen: true,
    },
    {
      title: 'Service Dock',
      content:
        'Comparte cotizaciones digitalmente con tus clientes, facilitando la comunicación y decisión.',
      icon: 'fas fa-share-alt',
      isOpen: true,
    },
    {
      title: 'Gestión de Catálogos',
      content:
        'Organiza proveedores, contactos, clientes, publicidad, observaciones, productos y formatos.',
      icon: 'fas fa-users',
      isOpen: true,
    },
    {
      title: 'Tablero de progreso',
      content:
        'Visualiza y gestiona de forma clara e intuitiva en qué etapa del proceso está cada oportunidad.',
      icon: 'fas fa-tasks',
      isOpen: true,
    },
    {
      title: 'Personaliza tus Cotizaciones',
      content:
        'Diseña cotizaciones que proyecten la personalidad de tu empresa, destacando la identidad de tu negocio.',
      icon: 'fas fa-palette',
      isOpen: true,
    },
  ];

  toggleCollapse(index: number): void {
    this.funcionalidades[index].isOpen = !this.funcionalidades[index].isOpen;
  }
}
