import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports/reports.service';
import { SweetAlertsService } from 'src/app/services/sweetMsg/sweet-alerts.service';

@Component({
  selector: 'app-reported-data',
  templateUrl: './reported-data.component.html',
  styleUrls: ['./reported-data.component.css']
})
export class ReportedDataComponent implements OnInit {
  selectedIndex: number = 0;
  //Filters
  SFReportedUserFilter: string = "user";
  SFReportedUserFilterList: any[] = [{ "key": "All", "value": "user" },{ "key": "Individual", "value": "individual" }, { "key": "Brand", "value": "brand" }, { "key": "Agency", "value": "agency" }];
  SFReportedPostFilter: string = "famelinks";
  SFReportedPostFilterList: any[] = [{ "key": "Funlinks", "value": "funlinks" }, { "key": "Followlinks", "value": "followlinks" }, { "key": "Famelinks", "value": "famelinks" }]
  SFReportedCmtFilter: string = "comment";
  SFReportedCmtFilterList: any[] = [{ "key": "ALL", "value": "comment" }];
  //container array
  reportedUsersList: any[] = [];
  reportedCommentList: any[] = [];
  reportedPostList: any[] = [];
  userObj: any = {}
  constructor(private crudService: ReportsService, private sweetMsg: SweetAlertsService) { }

  ngOnInit(): void {
    this.userObj = {
      is_blocked: true,
      blockReason: null,
      isPermanentBlock: true,
      blockDuration: 0
    }
  }
  onTabClick(event: any) {
    this.selectedIndex = event.index;
  }
  getReportedList(selectedTab: string) {
    switch (selectedTab) {
      case "ReportedUser":
        this.crudService.getReportData(this.SFReportedUserFilter, 1).subscribe((response: any) => {
          if (response.success) {
            this.reportedUsersList = response.result.map((e: any) => {
              return {
                "createdDate":e.createdAt? new Date(e.createdAt).toLocaleDateString() :"NA",
                "usesrName": e.user ? e.user['name'] : "NA",
                "reportedCount": e.reportedCount ? e.reportedCount : 0,
                "type": e.user ? e.user.type : "NA",
                "mobileNumber": e.mobileNumber ? e.mobileNumber : "NA",
                "email": e.user ? e.user.email : "NA",
                "userId":e.reportedItemId
              }
            })
            console.log("reportedUsersList  ", this.reportedUsersList);

            this.sweetMsg.showSuccess(response.message);
          } else {
            this.sweetMsg.showError(response.message);
          }
        })

        break;
      case "ReportedPost":
        this.crudService.getReportData(this.SFReportedPostFilter, 1).subscribe((response: any) => {
          console.log("Reported Post", response);

          if (response.success && response.result.length > 0) {
            this.reportedPostList = response.result.map((e: any) => {
              return {
                reportedCount: e.reportedCount,
                usesrName: e.user.name,
                userId: e.reportedItem.userId,
                mediaId: e.reportedItemId,
                type: this.SFReportedPostFilter,
                userContact: e.user.email ? (e.user.email) : (e.user.mobileNumber ? e.user.mobileNumber : "NA")
              }
            })
            this.sweetMsg.showSuccess(response.message);
          } else {
            this.sweetMsg.showError("Data not available..");
          }
        })

        break;
      case "ReportedComment":
        this.crudService.getReportData(this.SFReportedCmtFilter, 1).subscribe((response: any) => {
          console.log("Reported Comment", response);

          if (response.success && response.result.length > 0) {
            this.reportedCommentList = response.result.map((e: any) => {
              return {
                reportedCount: e.reportedCount,
                usesrName: e.user.name,
                userId: e.reportedItem.userId,
                mediaId: e.reportedItem.mediaId,
                body: e.reportedItem.body,
                userContact: e.user.email ? (e.user.email) : (e.user.mobileNumber ? e.user.mobileNumber : "NA"),
                createdDate: new Date(e.reportedItem.createdAt).toLocaleString()
              }
            })
            this.sweetMsg.showSuccess(response.message);
          } else {
            this.sweetMsg.showError("Data not available..");
          }
        })

        break;
      default:
        break;
    }
  }

  openBlockModel(userDetails: any) {
    this.userObj = {
      usesrName: userDetails.usesrName,
      userId: userDetails.userId,
      blockDuration:0,
      blockReason:null,
      isPermanentBlock:false
    }
    document.getElementById('blockUsersData')?.click();
  }

  submitBlockForm(obj: any) {
    console.log("user object : ", obj);
    let validateForm =this.formValidate()
    if (validateForm) {
      this.sweetMsg.showError(validateForm);
      return
    }else{
      this.userObj = {
        is_blocked  : obj.is_blocked,
        blockReason: obj.blockReason,
        isPermanentBlock: obj.isPermanentBlock,
        blockDuration: (obj.blockDuration && obj.isPermanentBlock === false) ? obj.blockDuration : 0
      }
      this.crudService.blockUser(this.userObj).subscribe((response: any) => {
        if (response.success) {
          this.sweetMsg.showSuccess(response.message);
        }else{
          this.sweetMsg.showError(response.message);
        }
        document.getElementById('blockUsersData')?.click(); 
      })
    }
  }

  resetBlockModel(){
    this.userObj = {
      is_blocked: true,
      blockReason: null,
      isPermanentBlock: false,
      blockDuration: 0
    }
  }

  formValidate() {
    console.log("this.userObj ",this.userObj);
    
    if (!this.userObj.usesrName) {
      return 'User name is required!'
    } else if (this.userObj.isPermanentBlock == false && (this.userObj.blockDuration < 0 || this.userObj.blockDuration === 0 || !(this.userObj.blockDuration))) {
      return 'Block duration required!'
    } else if (!(this.userObj.blockReason)) {
      return 'Block reason is required!'
    } else {
      return null
    }
  }
}

