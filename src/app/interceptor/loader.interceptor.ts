import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { LoaderService } from "../services/loader/loader.service";
import { SweetAlertsService } from "../services/sweetMsg/sweet-alerts.service";
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(public loaderService: LoaderService, private sweetMsg: SweetAlertsService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.show();
        return next.handle(req).pipe(
            catchError((error) => {
                this.sweetMsg.showError(error.error.message)
                return throwError(error.error);
            }),
            finalize(() => this.loaderService.hide())
        );
    }
}