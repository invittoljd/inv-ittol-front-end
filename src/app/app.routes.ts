/**Imports */
import { Routes } from '@angular/router';

/**Components */
import { HomeComponent } from '@home/pages/home/home.component';

/**Guards */
import { guestGuard } from '@guards/guest/guest.guard';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        loadChildren: () => import('@home/home.routes').then((r) => r.routes),
        canActivate: [guestGuard]
    },
    {
        path: 'auth',
        loadChildren: () => import('@auth/auth.routes').then((r) => r.routes),
    },
    {
        path: '**',
        redirectTo: 'auth'
    }
];
