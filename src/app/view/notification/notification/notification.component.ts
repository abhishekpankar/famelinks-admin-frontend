import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { SweetAlertsService } from 'src/app/services/sweetMsg/sweet-alerts.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  selectedIndex: number = 0;
  sendToUsers: any[] = [{ key: "All", "value": "all" }, { key: "Verified users", "value": "verifiedUser" }, { key: "Unverified Users", "value": "unverifiedUser" }, { key: "Blocked Users", "value": "blockedUser" }]
  notificationForm: any = FormGroup;
  SFCatFilter: string = "all";
  SFCatFilterList: any[] = [{ "key": "ALL", "value": "all" }];
  NotificationTypeList: any[] = [{ "key": "Pop-up", "value": "popup" },{ "key": "In-App", "value": "inapp" }];
  notificationList: any[] = [];
  constructor(private notificationService: NotificationService, private sweetMsg: SweetAlertsService) { }

  ngOnInit(): void {
    this.notificationForm = new FormGroup({
      userType: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      media: new FormControl(),
      notificationType:new FormControl('')
    })
  }
  onTabClick(event: any) {
    this.selectedIndex = event.index;
  }

  SubmitNotification(submitForm: any) {
    if (!this.notificationForm.valid) {
      console.log("Invalid Data.");
      return
    } else {
      console.log("Submit Sucess Form : ", submitForm.value);
      let requestData = {
        "userType": submitForm.value.userType ? submitForm.value.userType : null,
        "title": submitForm.value.title ? submitForm.value.title : null,
        "body": submitForm.value.body ? submitForm.value.body : null,
        "media": submitForm.value.media ? submitForm.value.media : ""
      }
      this.notificationService.sendNotification(requestData).subscribe((response: any) => {
        if (response.success) {
          this.sweetMsg.showSuccess(response.message);
          this.clearForm();
        } else {
          this.sweetMsg.showError(response.message);
        }
      })

    }

  }

  clearForm(){
    this.notificationForm.reset();
  }

  getNotificationList() {
    
    this.notificationService.getNotification({filterType:this.SFCatFilter}).subscribe((response: any) => {
      if (response.success) {
        this.notificationList = response.result.map((e:any)=>{
          return {
            "createdDate": new Date(e.createdAt).toLocaleDateString(),
            "title": e.title,
            "body": e.body,
            "media": "NA",
            "usrtType": e.type,
            "successCount": e.successCount,
            "failureCount": e.failureCount
          }
        })
        this.sweetMsg.showSuccess(response.message);
      } else {
        this.sweetMsg.showError(response.message);
      }
    })
 
  }
}
