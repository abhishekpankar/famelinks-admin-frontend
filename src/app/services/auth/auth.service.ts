import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { first, switchMap } from 'rxjs/operators'
import { Observable, of } from 'rxjs';
import { SweetAlertsService } from '../sweetMsg/sweet-alerts.service';
import { LoaderService } from '../loader/loader.service';

export interface Admin {
  id?: string;
  mobileNo?: String;
  email: string;
  photoURL?: string;
  username?: string;
  userRole?:userRole;
  tabToAccess:any[];
}

export interface userRole{
  admin?: Boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // admin$: Observable<Admin>;
}


