// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './shared/component/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent, // La página de inicio suele cargarse eager (no diferida)
      },
      {
        // Carga diferida para PresentacionComponent
        path: 'presentacion',
        loadComponent: () =>
          import('./pages/presentacion/presentacion.component').then(
            (c) => c.PresentacionComponent,
          ),
      },
      {
        // Carga diferida para FuncionalidadesComponent
        path: 'funcionalidades',
        loadComponent: () =>
          import('./pages/funcionalidades/funcionalidades.component').then(
            (c) => c.FuncionalidadesComponent,
          ),
      },
      {
        // Carga diferida para ConocenosComponent
        path: 'conocenos',
        loadComponent: () =>
          import('./pages/conocenos/conocenos.component').then(
            (c) => c.ConocenosComponent,
          ),
      },
      {
        // Carga diferida para AnalisisComponent
        path: 'analisis',
        loadComponent: () =>
          import('./pages/analisis/analisis.component').then(
            (c) => c.AnalisisComponent,
          ),
      },
    ],
  },
  {
        path: 'home',
        component: HomeComponent, // La página de inicio suele cargarse eager (no diferida)
  },
];
