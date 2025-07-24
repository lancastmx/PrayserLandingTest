
import { Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './shared/component/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'presentacion',
        loadComponent: () =>
          import('./pages/presentacion/presentacion.component').then(
            (c) => c.PresentacionComponent,
          ),
      },
      {
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
      {
        // Carga diferida para TutorialsPageComponent
        path: 'tutoriales',
        loadComponent: () =>
          import('./pages/tutorials-page/tutorials-page.component').then(
            (c) => c.TutorialsPageComponent,
          ),
      },
      {
        // Carga diferida para TutorialsPageComponent
        path: 'landing-pages',
        loadComponent: () =>
          import('./pages/contructor-landing-pages/contructor-landing-pages.component').then(
            (c) => c.ContructorLandingPagesComponent,
          ),
      },
    ],
  },
];
