/**Imports */
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

/**Environment */
import { environment } from '@environments/environment';

/**Services */
import { CookieService } from 'ngx-cookie-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  /**Injects */
  const cookieService = inject(CookieService);

  /**Variables */
  const token = cookieService.get(environment.tokenName);

  if (token) {
    const cloned = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(cloned);
  } else {
    return next(req);
  }
};
