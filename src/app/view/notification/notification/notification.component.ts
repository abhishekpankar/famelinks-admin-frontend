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
  sendToUsers: any[] = [{ key: "All", "value": "ALL" }, { key: "Verified users", "value": "VERIFIED_USER" }, { key: "Unverified Users", "value": "UNVERIFIED_USER" }, { key: "Blocked Users", "value": "BLOCKED_USER" }]
  notificationForm: any = FormGroup;
  SFCatFilter: string = "ALL";
  SFCatFilterList: any[] = [{ "key": "ALL", "value": "ALL" }];
  notificationList: any[] = [];
  constructor(private notificationService: NotificationService, private sweetMsg: SweetAlertsService) { }

  ngOnInit(): void {
    this.notificationForm = new FormGroup({
      userType: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      media: new FormControl()
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
    this.notificationList = [{
      "createdDate": "23/01/2022",
      "title": "Famelink",
      "body": "Kayak allows users to set up push notifications for flight prices – alerting them as soon as there’s a dip in cost. I actually like this one, because the user is the one that’s setting up the notification. And because everybody loves a good deal, a lot of push notifications are being created!",
      "media": "NA",
      "usrtType": "ALL",
      "successCount": 10,
      "failureCount": 50
    },
    {
      "createdDate": "23/01/2022",
      "title": "Famelink",
      "body": "Kayak allows users to set up push notifications for flight prices – alerting them as soon as there’s a dip in cost. I actually like this one, because the user is the one that’s setting up the notification. And because everybody loves a good deal, a lot of push notifications are being created!",
      "media": "NA",
      "usrtType": "VERIFIED_USER",
      "successCount": 50,
      "failureCount": 10
    },
    {
      "createdDate": "23/01/2022",
      "title": "Famelink",
      "body": "Kayak allows users to set up push notifications for flight prices – alerting them as soon as there’s a dip in cost. I actually like this one, because the user is the one that’s setting up the notification. And because everybody loves a good deal, a lot of push notifications are being created!",
      "media": "NA",
      "usrtType": "ALL",
      "successCount": 50,
      "failureCount": 20
    },
    {
      "createdDate": "23/01/2022",
      "title": "Famelink",
      "body": "Kayak allows users to set up push notifications for flight prices – alerting them as soon as there’s a dip in cost. I actually like this one, because the user is the one that’s setting up the notification. And because everybody loves a good deal, a lot of push notifications are being created!",
      "media": "NA",
      "usrtType": "VERIFIED_USER",
      "successCount": 100,
      "failureCount": 20
    },
    {
      "createdDate": "23/01/2022",
      "title": "Famelink",
      "body": "Kayak allows users to set up push notifications for flight prices – alerting them as soon as there’s a dip in cost. I actually like this one, because the user is the one that’s setting up the notification. And because everybody loves a good deal, a lot of push notifications are being created!",
      "media": "NA",
      "usrtType": "UNVERIFIED_USER",
      "successCount": 20,
      "failureCount": 10
    },
    {
      "createdDate": "23/01/2022",
      "title": "Famelink",
      "body": "Kayak allows users to set up push notifications for flight prices – alerting them as soon as there’s a dip in cost. I actually like this one, because the user is the one that’s setting up the notification. And because everybody loves a good deal, a lot of push notifications are being created!",
      "media": "NA",
      "usrtType": "VERIFIED_USER",
      "successCount": 100,
      "failureCount": 20
    }
    ]
  }
}
