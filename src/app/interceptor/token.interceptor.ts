import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { LoaderService } from "../services/loader/loader.service";
import { SweetAlertsService } from "../services/sweetMsg/sweet-alerts.service";
import { environment } from "src/environments/environment.prod";
import { Router } from "@angular/router";
@Injectable()
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor( private route: Router,private sweetMsg: SweetAlertsService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if account is logged in and request is to the api url
       const token = localStorage.getItem('token');
       console.log("token : ",token);
       
        const isApiUrl = request.url.startsWith(environment.BASE_URL);
        console.log(" isApiUrl : ",isApiUrl);
        
        if ( isApiUrl && token) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${token}` }
            });
        }else{
            this.route.navigate(['/login']);
            this.sweetMsg.showError("You have been logged out of the system.  Please login again.")
        }

        return next.handle(request);
    }
}