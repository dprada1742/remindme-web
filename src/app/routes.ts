import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { ComunidadesComponent } from './comunidades/comunidades.component';
import { CrearComunidadComponent } from './crear-comunidad/crear-comunidad.component';
import { DetalleComunidadComponent } from './detalle-comunidad/detalle-comunidad.component';

const routeConfig: Routes = [
  { path: '', component: InicioComponent },
  { path: 'home', component: HomeComponent },
  { path: 'comunidades', component: ComunidadesComponent },
  { path: 'crearcomunidad', component: CrearComunidadComponent },
  { path: 'detallecomunidad/:nombre', component: DetalleComunidadComponent }, // Add a route parameter ':nombre'
];

export default routeConfig;