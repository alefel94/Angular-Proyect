import { Routes } from '@angular/router';
import { RestCounter } from './pages/counter/rest-counter.component'; 

export const routes: Routes = [
    {
        path: '',
        component: RestCounter
    },
    {
        path: '**',
        redirectTo: ''
    }
];
