import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigServices } from 'src/app/config/app-config';
import { ApiCollection } from 'src/app/config/project.constant';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor(private appConfigServices: AppConfigServices) { }

  getAudioList(){
    return this.appConfigServices.getService(ApiCollection.GET_MUSIC_LIST);
  }

  updateAudioDocument(id:string,body:any){

  }

  createAudioDocument(requestJson:any){
    return this.appConfigServices.postService(ApiCollection.CREATE_MUSIC_DOCUMENT, requestJson);
  }

  uploadAudioFile(requestData:any){
    const httpOptions = {
      headers: new HttpHeaders({
       "Content-Type": "multipart/form-data" // 👈
      })
    };
    
    return this.appConfigServices.postService(ApiCollection.UPLOAD_MUSIC, requestData , httpOptions);
    
  }
}
