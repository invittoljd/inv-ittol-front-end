/**Imports */
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

/**Environment */
import { environment } from '@environments/environment';

/**Services */
import { AuthService } from '@services/auth/auth.service';
import { CookieService } from 'ngx-cookie-service';

export const userGuard: CanActivateFn = async (route, state) => {
   /**Injects */
   const cookieService = inject(CookieService);
   const router = inject(Router);
 
   /**Variables */
   const token = cookieService.get(environment.tokenName);
 
   if (token) {
     const _authService = inject(AuthService);
     const response = await _authService.getUserInfo();
     const { type } = response;
     if (type) {
       return true;
     }
   }
   router.navigate(['/', 'auth']);
   return false;
 };
 