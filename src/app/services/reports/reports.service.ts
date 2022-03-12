import { Injectable } from '@angular/core';
import { AppConfigServices } from 'src/app/config/app-config';
import { ApiCollection } from 'src/app/config/project.constant';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private appConfigServices: AppConfigServices) { }

  getReportData(type:string,page:number){
    return this.appConfigServices.getService(ApiCollection.GET_REPORT_LIST+'?type='+type+'&page='+page)
  }

  blockUser(payload:any){
    return this.appConfigServices.postService(ApiCollection.BLOCK_USER,payload);
  }
  sendMail(payload:any){
    return this.appConfigServices.postService(ApiCollection.SEND_MAIL,payload);
  }
}
