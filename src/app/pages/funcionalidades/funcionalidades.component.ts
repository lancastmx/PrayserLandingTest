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
    { id: 'proveedores',  title: 'Proveedores',          icon: 'fa-solid fa-truck',
      description: 'Gestiona la información de todas las empresas o personas que te suministran productos o servicios.' },
    { id: 'contactos',    title: 'Contactos',            icon: 'fa-solid fa-address-book',
      description: 'Administra una lista general de contactos relevantes para tu negocio.' },
    { id: 'clientes',     title: 'Clientes',             icon: 'fa-solid fa-users',
      description: 'Gestiona toda la información relacionada con tus compradores.' },
    { id: 'publicidad',   title: 'Publicidad',           icon: 'fa-solid fa-bullhorn',
      description: 'Registra y organiza la información sobre tus campañas publicitarias.' },
    { id: 'observaciones',title: 'Observaciones',        icon: 'fa-solid fa-clipboard',
      description: 'Espacio flexible para notas, comentarios o recordatorios importantes.' },
    { id: 'productos',    title: 'Productos / Servicios',icon: 'fa-solid fa-box',
      description: 'Administra el catálogo de lo que ofreces a tus clientes.' },
    { id: 'formatos',     title: 'Formatos',             icon: 'fa-solid fa-file-lines',
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
//   // --- Data for Content ---
//   const contentData2 = {
//     proveedores: {
//         title: "1. Proveedores",
//         icon: "fas fa-truck",
//         description: `<strong>Función:</strong> Gestiona la información de todas las empresas o personas que te suministran productos o servicios.<br><br>
//                       <strong>Utilidad:</strong> Mantén un registro organizado de datos de contacto, condiciones comerciales, historial de compras y evaluaciones de tus proveedores. Facilita la comunicación y la gestión de la cadena de suministro.`
//     },
//     contactos: {
//         title: "2. Contactos",
//         icon: "fas fa-address-book",
//         description: `<strong>Función:</strong> Administra una lista general de contactos relevantes para tu negocio.<br><br>
//                       <strong>Utilidad:</strong> Puede incluir prospectos, socios, colaboradores u otros contactos que no necesariamente son clientes o proveedores activos. Centraliza la información de comunicación diversa.`
//     },
//     clientes: {
//         title: "3. Clientes",
//         icon: "fas fa-users",
//         description: `<strong>Función:</strong> Gestiona toda la información relacionada con las personas o empresas a las que vendes tus productos o servicios.<br><br>
//                       <strong>Utilidad:</strong> Almacena datos de contacto, historial de compras, preferencias, límites de crédito y cualquier otra información relevante para la gestión de la relación con el cliente (CRM) y el proceso de ventas. Es fundamental para crear cotizaciones rápidamente.`
//     },
//     publicidad: {
//         title: "4. Publicidad",
//         icon: "fas fa-bullhorn",
//         description: `<strong>Función:</strong> Registra y organiza la información sobre tus campañas y esfuerzos publicitarios.<br><br>
//                       <strong>Utilidad:</strong> Lleva un control de los medios utilizados, costos, fechas y posiblemente resultados de tus acciones de marketing y publicidad. Ayuda a evaluar el retorno de inversión.`
//     },
//     observaciones: {
//         title: "5. Observaciones",
//         icon: "fas fa-clipboard",
//         description: `<strong>Función:</strong> Un espacio flexible para registrar notas, comentarios o recordatorios importantes.<br><br>
//                       <strong>Utilidad:</strong> Puede usarse para anotaciones generales sobre clientes, proveedores, procesos internos o cualquier detalle que necesites tener a mano y que no encaje en otras categorías específicas.`
//     },
//     productos: {
//         title: "6. Productos / Servicios",
//         icon: "fas fa-box",
//         description: `<strong>Función:</strong> Administra el catálogo detallado de lo que ofreces a tus clientes.<br><br>
//                       <strong>Utilidad:</strong> Define descripciones, códigos (SKU), precios, unidades de medida, categorías y otros atributos de tus productos o servicios. Es la base para la creación de cotizaciones y la gestión de inventario (si aplica).`
//     },
//     formatos: {
//         title: "7. Formatos",
//         icon: "fas fa-file-alt",
//         description: `<strong>Función:</strong> Gestiona las plantillas o diseños predefinidos para tus documentos.<br><br>
//                       <strong>Utilidad:</strong> Personaliza la apariencia de tus cotizaciones, pedidos u otros documentos generados por Prayser, asegurando una imagen profesional y consistente con la identidad de tu negocio.`
//     }
// };

// // --- DOM Elements ---
// const archivoMenu = document.getElementById('archivo-menu');
// const contentArea = document.getElementById('content-area');
// const menuLinks = archivoMenu.querySelectorAll('.menu-link'); // Get all links within the menu
// const sidebar = document.getElementById('sidebar');
// const menuToggle = document.getElementById('menu-toggle');
// const closeMenuButton = document.getElementById('close-menu');


// // --- Event Listeners ---

// // Handle clicks on menu links within "Archivo"
// archivoMenu.addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent default link behavior
//     const targetLink = event.target.closest('a'); // Find the clicked link element

//     if (targetLink && targetLink.dataset.section) {
//         const sectionKey = targetLink.dataset.section;
//         const sectionData = contentData[sectionKey];

//         if (sectionData) {
//             // Update content area with fade effect
//             contentArea.style.opacity = 0; // Start fade out
//             setTimeout(() => {
//                 // Update the inner HTML of the content area
//                 contentArea.innerHTML = `
//                     <h2 class="flex items-center text-2xl font-semibold text-gray-700 mb-4">
//                         <i class="${sectionData.icon} w-6 h-6 mr-3 text-blue-600"></i>
//                         ${sectionData.title}
//                     </h2>
//                     <div class="text-gray-600 space-y-3">${sectionData.description}</div>
//                     <p class="mt-6 text-sm text-gray-500 italic">Estos catálogos interconectados son la base para que Prayser simplifique y agilice tus procesos de cotización y venta.</p>
//                      <img src="https://placehold.co/800x400/f3f4f6/9ca3af?text=${encodeURIComponent(sectionData.title)}"
//                          alt="Imagen representativa de ${sectionData.title}"
//                          class="rounded-lg shadow-md w-full max-w-3xl mx-auto mt-6"
//                          onerror="this.onerror=null; this.src='https://placehold.co/600x300/f3f4f6/9ca3af?text=Error+al+cargar+imagen';">
//                 `;
//                 contentArea.style.opacity = 1; // Fade in new content
//             }, 150); // Match timeout roughly to CSS transition duration

//             // Update active link styling
//             // Remove active class from all links first
//             menuLinks.forEach(link => link.classList.remove('active-link'));
//             // Add active class to the clicked link
//             targetLink.classList.add('active-link');

//             // Close sidebar on mobile after clicking a link
//             if (window.innerWidth < 768) { // Tailwind's md breakpoint
//                  sidebar.classList.add('-translate-x-full');
//             }
//         }
//     }
// });

//  // Sidebar Toggle for Mobile: Open sidebar
//  menuToggle.addEventListener('click', () => {
//     sidebar.classList.remove('-translate-x-full');
//  });

//  // Sidebar Toggle for Mobile: Close sidebar via button
//  closeMenuButton.addEventListener('click', () => {
//      sidebar.classList.add('-translate-x-full');
//  });

//  // Close sidebar if clicking outside of it on mobile
//  document.addEventListener('click', (event) => {
//      // Check if the click is outside the sidebar and also not on the toggle button
//      if (window.innerWidth < 768 && !sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
//          sidebar.classList.add('-translate-x-full');
//      }
//  });

//  // Optional: Set the first item as active on initial load
//  // Find the first link and simulate a click or directly update content/style
//  const firstLink = archivoMenu.querySelector('.menu-link');
//  if (firstLink) {
//      // Option 1: Simulate click (might be simpler)
//      // firstLink.click();
//      // Option 2: Manually set active state and content (more control)
//      const firstSectionKey = firstLink.dataset.section;
//      const firstSectionData = contentData[firstSectionKey];
//      if(firstSectionData){
//         contentArea.innerHTML = `
//             <h2 class="flex items-center text-2xl font-semibold text-gray-700 mb-4">
//                 <i class="${firstSectionData.icon} w-6 h-6 mr-3 text-blue-600"></i>
//                 ${firstSectionData.title}
//             </h2>
//             <div class="text-gray-600 space-y-3">${firstSectionData.description}</div>
//             <p class="mt-6 text-sm text-gray-500 italic">Estos catálogos interconectados son la base para que Prayser simplifique y agilice tus procesos de cotización y venta.</p>
//             <img src="https://placehold.co/800x400/f3f4f6/9ca3af?text=${encodeURIComponent(firstSectionData.title)}"
//                  alt="Imagen representativa de ${firstSectionData.title}"
//                  class="rounded-lg shadow-md w-full max-w-3xl mx-auto mt-6"
//                  onerror="this.onerror=null; this.src='https://placehold.co/600x300/f3f4f6/9ca3af?text=Error+al+cargar+imagen';">
//         `;
//         firstLink.classList.add('active-link');
//      }

//  }
}
