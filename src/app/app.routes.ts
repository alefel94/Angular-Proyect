import { Routes } from '@angular/router';
import { RestCounter } from './pages/counter/rest-counter.component';
import { HeroPageComponent } from './pages/hero/hero-pages.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';

export const routes: Routes = [
  {
    path: '',  // Ruta principal
    component: RestCounter
},
{
    path: 'hero',  // Ruta para el componente de héroes
    component: HeroPageComponent
},
{
  path: 'dragonball',  // Ruta para el componente de héroes
  component: DragonballPageComponent
},
{
    path: '**',  // Ruta comodín (siempre debe ir al final)
    redirectTo: ''  // Redirige a la ruta principal si no encuentra la ruta
}
  ];
