import { Injectable } from '@angular/core';
import { AppConfigServices } from 'src/app/config/app-config';
import { ApiCollection } from 'src/app/config/project.constant';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private appConfigServices: AppConfigServices) { }

  getUserList(requestData:any){
    return this.appConfigServices.postService(ApiCollection.GET_USRS,requestData);
  }
}
