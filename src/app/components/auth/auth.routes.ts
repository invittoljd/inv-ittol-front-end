/**Imports */
import { Routes } from '@angular/router';

/**Components */
import { LogInComponent } from '@auth/pages/log-in/log-in.component';

export const routes: Routes = [
    {
        path: 'log-in',
        component: LogInComponent
    },
    {
        path: '**',
        redirectTo: 'log-in'
    }
]