import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PresentacionComponent } from './pages/presentacion/presentacion.component';
import { FuncionalidadesComponent } from './pages/funcionalidades/funcionalidades.component';
import { ConocenosComponent } from './pages/conocenos/conocenos.component';
import { AnalisisComponent } from './pages/analisis/analisis.component';
import { LayoutComponent } from './shared/component/layout/layout.component';

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
        component: PresentacionComponent,
      },
      { path: 'funcionalidades', component: FuncionalidadesComponent },
      { path: 'conocenos', component: ConocenosComponent },
      { path: 'analisis', component: AnalisisComponent },
    ],
  },
];
