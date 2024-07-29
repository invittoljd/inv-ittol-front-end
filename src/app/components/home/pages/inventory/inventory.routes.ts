/**Imports */
import { Routes } from '@angular/router';

/**Components */
import { AreaPageComponent } from '@home-inventory/area/pages/area-page/area-page.component';
import { CategoryPageComponent } from '@home-inventory/category/page/category-page/category-page.component';
import { ItemPageComponent } from '@home-inventory/item/page/item-page/item-page.component';

export const routes: Routes = [
    {
        path: 'areas',
        component: AreaPageComponent
    },
    {
        path: 'categories/:area_id',
        component: CategoryPageComponent
    },
    {
        path: 'items/:area_id/:category_id',
        component: ItemPageComponent
    },
    {
        path: '**',
        redirectTo: 'areas'
    }
]