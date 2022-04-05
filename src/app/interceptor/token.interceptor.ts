import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { LoaderService } from "../services/loader/loader.service";
import { SweetAlertsService } from "../services/sweetMsg/sweet-alerts.service";
import { environment } from "src/environments/environment.prod";
@Injectable()
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }

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
        }

        return next.handle(request);
    }
}