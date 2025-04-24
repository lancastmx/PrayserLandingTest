import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PresentacionComponent } from './pages/presentacion/presentacion.component';
import { FuncionalidadesComponent } from './pages/funcionalidades/funcionalidades.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'ps',
    component: PresentacionComponent,
  },
  { path: 'fn', component: FuncionalidadesComponent },
];
