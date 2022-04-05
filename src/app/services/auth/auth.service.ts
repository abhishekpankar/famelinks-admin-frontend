import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { first, switchMap } from 'rxjs/operators'
import { Observable, of } from 'rxjs';
import { SweetAlertsService } from '../sweetMsg/sweet-alerts.service';
import { LoaderService } from '../loader/loader.service';
import { AppConfigServices } from 'src/app/config/app-config';
import { ApiCollection } from 'src/app/config/project.constant';

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
  constructor(private appConfigServices: AppConfigServices) { }
  admin$!: Observable<Admin>;

  login(email:string,password:string){
    const payload = {email: email,password: password};
    return this.appConfigServices.postService(ApiCollection.ADMIN_LOGIN, payload);
  }
  
}


