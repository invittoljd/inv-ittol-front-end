/**Imports */
import { Routes } from '@angular/router';

/**Components */
import { RequestPageComponent } from '@home-request/page/request-page/request-page.component';
import { UserPageComponent } from '@home-user/page/user-page/user-page.component';
import { ItineraryPageComponent } from '@home-itinerary/page/itinerary-page/itinerary-page.component';

export const routes: Routes = [
    {
        path: 'inventory',
        loadChildren: () => import('@home/pages/inventory/inventory.routes').then((r) => r.routes),
    },
    {
        path: 'request',
        component: RequestPageComponent
    },
    {
        path: 'itinerary',
        component: ItineraryPageComponent
    },
    {
        path: 'user',
        component: UserPageComponent
    },
    {
        path: '**',
        redirectTo: 'inventory'
    }
]