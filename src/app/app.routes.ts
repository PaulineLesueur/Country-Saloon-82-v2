import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'test',
        loadComponent: () => import('./features/test/test').then(m => m.Test)
    }
];
