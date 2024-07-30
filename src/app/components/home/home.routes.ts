/**Imports */
import { Routes } from '@angular/router';

/**Components */
import { RequestPageComponent } from '@home-request/page/request-page/request-page.component';
import { UserPageComponent } from '@home-user/page/user-page/user-page.component';
import { ItineraryPageComponent } from '@home-itinerary/page/itinerary-page/itinerary-page.component';

/**Guards */
import { adminGuard } from '@guards/admin/admin.guard';
import { userGuard } from '@guards/user/user.guard';

export const routes: Routes = [
    {
        path: 'inventory',
        loadChildren: () => import('@home-inventory/inventory.routes').then((r) => r.routes),
    },
    {
        path: 'request',
        component: RequestPageComponent,
        canActivate: [userGuard]
    },
    {
        path: 'itinerary',
        component: ItineraryPageComponent,
        canActivate: [userGuard]
    },
    {
        path: 'user',
        component: UserPageComponent,
        canActivate: [adminGuard]
    },
    {
        path: 'data',
        loadChildren: () => import('@home-data/data.route').then((r) => r.routes),
        canActivate: [adminGuard]
    },
    {
        path: '**',
        redirectTo: 'inventory'
    }
]