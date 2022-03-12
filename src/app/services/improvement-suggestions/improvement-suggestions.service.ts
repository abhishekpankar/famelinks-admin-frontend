import { Injectable } from '@angular/core';
import { AppConfigServices } from 'src/app/config/app-config';
import { ApiCollection } from 'src/app/config/project.constant';

@Injectable({
  providedIn: 'root'
})
export class ImprovementSuggestionsService {

  constructor(private appConfigServices: AppConfigServices) { }
  getSuggestionData(type:string,page:number){
    return this.appConfigServices.getService(ApiCollection.GET_IMPROVEMENT_SUGGESTIONS_LIST+page)
  }
}
