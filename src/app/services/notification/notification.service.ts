import { Injectable } from '@angular/core';
import { AppConfigServices } from 'src/app/config/app-config';
import { ApiCollection } from 'src/app/config/project.constant';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private appConfigServices: AppConfigServices ) { }

  sendNotification(data: any){
    return this.appConfigServices.postService(ApiCollection.SEND_NOTIFICATION, data);
  }

  getNotification(data:any){
    return this.appConfigServices.postService(ApiCollection.GET_NOTIFICATION,data)
  }
}
