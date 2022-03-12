import { Component, OnInit } from '@angular/core';
import { ImprovementSuggestionsService } from 'src/app/services/improvement-suggestions/improvement-suggestions.service';
import { SweetAlertsService } from 'src/app/services/sweetMsg/sweet-alerts.service';

@Component({
  selector: 'app-improvement-suggestions',
  templateUrl: './improvement-suggestions.component.html',
  styleUrls: ['./improvement-suggestions.component.css']
})
export class ImprovementSuggestionsComponent implements OnInit {
  selectedIndex: number = 0;

  //Filters
  SFSuggestionsFilter: string = "all";
  pageCount = 0
  SFSuggestionsFilterList: any[] = [{ "key": "All", "value": "all" }];
  //container array
  improvementSuggestionList: any[] = [];
  constructor(private crudService: ImprovementSuggestionsService, private sweetMsg: SweetAlertsService) { }

  ngOnInit(): void {
  }
  onTabClick(event: any) {
    this.selectedIndex = event.index;
  }

  getList(){
    this.crudService.getSuggestionData(this.SFSuggestionsFilter, 1).subscribe((response: any) => {
      if (response.success) {
        this.improvementSuggestionList = response.result.map((e: any) => {
          return {
            "createdDate":e.createdAt? new Date(e.createdAt).toLocaleDateString() :"NA",
            "usesrName": e.name ? e['name'] : "NA",
            "type": e.type ? e.type : "NA",
            "mobileNumber": e.mobileNumber ? e.mobileNumber : "NA",
            "email": e.email ? e.email : "NA",
            "userId":e.userId,
            "body":e.body
          }
        })
        console.log("improvementSuggestionList  ", this.improvementSuggestionList);

        this.sweetMsg.showSuccess(response.message);
      } else {
        this.sweetMsg.showError(response.message);
      }
    })
  }
}
