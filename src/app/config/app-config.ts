import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { AppConstant } from './project.constant';

@Injectable({
    providedIn: 'root'
})

export class AppConfigServices {
    // baseUrl = AppConstant.BASE_URL;
    baseUrl = environment.BASE_URL;

    constructor(private httpRequest: HttpClient) {
        // const httpOptions = {
        //     headers: new HttpHeaders({ 
        //       'Access-Control-Allow-Origin':'*',
        //       'Access-Control-Allow-Methods':'GET,POST,PATCH,DELETE,PUT,OPTIONS',
        //       'Access-Control-Allow-Headers':'Origin, Content-Type, X-Auth-Token, content-type',
        //       "Content-Type": "application/json",
        //       "mode":"no-cors"
        //     })
        //   };

     }

    getService = (apiUrl: string, apiData?: any) => {
        return this.httpRequest.get(this.baseUrl + apiUrl);        
    }

    postService = (apiUrl: string, apiData?: any, httpOptions?: any) : Observable<any> => {
        return this.httpRequest.post(this.baseUrl + apiUrl, apiData);
    }

    patchService = (apiUrl: string, apiData?: any, httpOptions?: any) : Observable<any> => {
        return this.httpRequest.patch(this.baseUrl + apiUrl, apiData);
    }

}