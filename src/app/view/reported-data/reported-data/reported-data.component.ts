import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reported-data',
  templateUrl: './reported-data.component.html',
  styleUrls: ['./reported-data.component.css']
})
export class ReportedDataComponent implements OnInit {
  selectedIndex: number = 0;
  //Filters
  SFReportedUserFilter: string = "ALL";
  SFReportedUserFilterList: any[] = [{ "key": "ALL", "value": "ALL" }];
  SFReportedPostFilter: string = "ALL";
  SFReportedPostFilterList: any[] = [{ "key": "ALL", "value": "ALL" }]
  SFReportedCmtFilter: string = "ALL";
  SFReportedCmtFilterList: any[] = [{ "key": "ALL", "value": "ALL" }];
  //container array
  reportedUsersList:any[]=[];
  reportedCommentList:any[]=[];
  reportedPostList:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  onTabClick(event: any) {
    this.selectedIndex = event.index;
  }
  getReportedList(selectedTab:string){
    switch (selectedTab) {
      case "ReportedUser":
        this.reportedUsersList = [{
          "usesrName":"Sunita Patel",
          "reportedCount":10,
          "profileUrl":"NA"
        },{
          "usesrName":"Abhisek Pankar",
          "reportedCount":2,
          "profileUrl":"NA"
        },{
          "usesrName":"Bhumika S",
          "reportedCount":50,
          "profileUrl":"NA"
        },{
          "usesrName":"Ajinkya Kadhe",
          "reportedCount":3,
          "profileUrl":"NA"
        }]
        break;
        case "ReportedPost":
          this.reportedPostList =[{
            "usesrName":"Sunita Patel",
            "reportedCount":10,
            "reportedPost":""
          },{
            "usesrName":"Abhisek Pankar",
            "reportedCount":2,
            "reportedPost":""
          },{
            "usesrName":"Bhumika S",
            "reportedCount":50,
            "reportedPost":""
          },{
            "usesrName":"Ajinkya Kadhe",
            "reportedCount":3,
            "reportedPost":""
          }]
          break;
          
        case "ReportedComment":
          this.reportedCommentList = [{
            "usesrName":"John Doe",
            "reportedCount":2,
            "reportedComment":"I believe there are many more pleasurable opportunities ahead for individuals that looked at your site."
          },
          {
            "usesrName":"Kaustubh Pikle",
            "reportedCount":15,
            "reportedComment":"I believe there are many more pleasurable opportunities ahead for individuals that looked at your site."
          },
          {
            "usesrName":"Sunita Patel",
            "reportedCount":10,
            "reportedComment":"I believe there are many more pleasurable opportunities ahead for individuals that looked at your site."
          },
          {
            "usesrName":"Aditya Mohite",
            "reportedCount":3,
            "reportedComment":"I believe there are many more pleasurable opportunities ahead for individuals that looked at your site."
          },
          {
            "usesrName":"Abhishek Pankar",
            "reportedCount":5,
            "reportedComment":"I believe there are many more pleasurable opportunities ahead for individuals that looked at your site."
          }
        ]
          
          break;
      default:
        break;
    }
  }
}

