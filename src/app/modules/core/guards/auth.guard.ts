import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let isLoggedIn = localStorage.getItem('userToken') ? true : false;
  const router = inject(Router);
  if(isLoggedIn == false) {
    router.navigate(['/auth/login'])
  }
  return isLoggedIn;
};
