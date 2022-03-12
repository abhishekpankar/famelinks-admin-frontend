import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports/reports.service';
import { SweetAlertsService } from 'src/app/services/sweetMsg/sweet-alerts.service';

@Component({
  selector: 'app-support-query',
  templateUrl: './support-query.component.html',
  styleUrls: ['./support-query.component.css'],
})
export class SupportQueryComponent implements OnInit {
  selectedIndex: number = 0;

  //Filters
  SFSupportQueryFilter: string = "issue";
  pageCount = 0
  SFSupportQueryFilterList: any[] = [{ "key": "All", "value": "issue" }];
  mailObj :any

  //container array
  reportedIssueList: any[] = [];
  constructor(private crudService: ReportsService, private sweetMsg: SweetAlertsService) {}

  ngOnInit(): void {
  this.resetMailForm()
  }

  resetMailForm(){
    this.mailObj={
      "emailBody":null,
      "email":null,
      "userId":null,
      "usesrName":null
    }
  }

  onTabClick(event: any) {
    this.selectedIndex = event.index;
  }

  getList(){
    this.crudService.getReportData(this.SFSupportQueryFilter, 1).subscribe((response: any) => {
      if (response.success) {
        this.reportedIssueList = response.result.map((e: any) => {
          return {
            "createdDate":e.createdAt? new Date(e.createdAt).toLocaleDateString() :"NA",
            "usesrName": e.name ? e['name'] : "NA",
            "type": e.type ? e.type : "NA",
            "mobileNumber": e.mobileNumber ? e.mobileNumber : "NA",
            "email": e.email ? e.email : "NA",
            "userId":e.userId,
            "issueBody":e.body
          }
        })
        console.log("reportedIssueList  ", this.reportedIssueList);

        this.sweetMsg.showSuccess(response.message);
      } else {
        this.sweetMsg.showError(response.message);
      }
    })
  }

  openSendMailModel(data:any){
    if(data.email){
    this.mailObj = {
      usesrName: data.usesrName,
      userId: data.userId,
      email:data.email,
      emailBody:data.emailBody,
    }
    document.getElementById('sendMailPopBtn')?.click();
  }else{
    this.sweetMsg.showError("Mail id not available.");
  }
  }

  submitMailForm(mailObj:any){
    console.log("mail object : ", mailObj);
    let validateForm =this.formValidate()
    if (validateForm) {
      this.sweetMsg.showError(validateForm);
      return
    }else{
      this.mailObj = {
        emailBody:mailObj.emailBody,
        email:mailObj.email,
        userId:mailObj.userId,
        usesrName:mailObj.usesrName
        }
      this.crudService.sendMail(this.mailObj).subscribe((response: any) => {
        if (response.success) {
          this.sweetMsg.showSuccess(response.message);
        }else{
          this.sweetMsg.showError(response.message);
        }
        this.resetMailForm()
        document.getElementById('sendMailPopBtn')?.click(); 
      })
    }
  }

  formValidate() {
    console.log("this.userObj ",this.mailObj);
    
   if (!this.mailObj.emailBody) {
      return 'Email Body required!'
    } else if (!(this.mailObj.email)) {
      return 'Email ID is required!'
    } else {
      return null
    }
  }
}
