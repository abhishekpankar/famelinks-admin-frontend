import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';
import { SweetAlertsService } from '../services/sweetMsg/sweet-alerts.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private sweetAlert: SweetAlertsService,) { }

   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
     return this.auth.admin$.pipe(
      take(1),
      map(user => !!user), // <-- map to boolean
      tap(loggedIn => {
        if (!loggedIn) {
          this.sweetAlert.showInfo('Please login to proceed!')
          this.router.navigate(['/login']);
        }
    })
  ) 
  }


  
}
