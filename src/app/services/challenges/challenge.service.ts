import { Injectable } from '@angular/core';
import { AppConfigServices } from 'src/app/config/app-config';
import { ApiCollection } from 'src/app/config/project.constant';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(private appConfigServices: AppConfigServices ) { }

  getChallengeList(requestData:any){
    return this.appConfigServices.postService(ApiCollection.GET_CATERGORY,requestData);
  }

  createChallenge(data: any){
    return this.appConfigServices.postService(ApiCollection.CREATE_CATERGORY, data);
  }

  updateChallenge( data: any){
    return this.appConfigServices.patchService(ApiCollection.UPDATE_CATERGORY, data);
  }

  deleteChallenge(id:string){
    return this.appConfigServices.deleteService(ApiCollection.DELETE_CATERGORY, {"challengeId":id});

  }
}
