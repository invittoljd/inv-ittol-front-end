/**Imports */
import { Routes } from '@angular/router';

/**Components */
import { ImportPageComponent } from '@home-data/page/import-page/import-page.component';
import { ExportPageComponent } from '@home-data/page/export-page/export-page.component';

/**Components */

export const routes: Routes = [
    {
        path: 'import',
        component: ImportPageComponent
    },
    {
        path: 'export',
        component: ExportPageComponent
    },
    {
        path: '**',
        redirectTo: 'import'
    }
]