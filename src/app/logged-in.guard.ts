import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const loggedInGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  // const router = inject(Router);
  const isLoggedIn = authService.isLoggedIn();
  // if (!isLoggedIn) {
  //   return router.parseUrl('/login');
  // }
  console.log('canActivate', isLoggedIn);
  return isLoggedIn;
};
