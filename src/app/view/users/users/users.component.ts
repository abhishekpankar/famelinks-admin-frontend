import { Component, OnInit } from '@angular/core';
import { BucketConstants } from 'src/app/config/project.constant';
import { SweetAlertsService } from 'src/app/services/sweetMsg/sweet-alerts.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  SFCatFilter: string = "ALL";
  SFCatFilterList: any[] = [{ "key": "ALL", "value": "ALL" },{ "key": "VERIFIED", "value": "VERIFIED" },{ "key": "UNVERIFIED", "value": "UNVERIFIED" }]
  selectedIndex: number = 0;
  userList:any[] =[];
  constructor(private crudeService:UsersService,private sweetMsg: SweetAlertsService) { }
  
  ngOnInit(): void {
  }

  onTabClick(event: any) {
    this.selectedIndex = event.index;
  }
  getUsersList(){
    const requestObj = {
      "filterType": this.SFCatFilter,
      "selectedValue": "",
    }
    this.crudeService.getUserList(requestObj).subscribe(response=>{
      if (response.result.length > 0 && response.success) {
        this.userList = response['result'].map((user: any) => {
          return {
            id:user._id,
            name:user.name,
            mobileNumber:user.mobileNumber,
            gender:user.gender,
            type:user.type,
            bio:user.bio,
            profession:user.profession,
            district:user.district,
            state:user.state,
            country:user.country,
            dob:user.dob,
            isRegistered:user.isRegistered,
            isBlocked:user.isBlocked,
            profileImage:user.profileImage,
            isVerified:user.isVerified,
            createdAt:user.createdAt,
            username:user.username,
            referredBy:user.referredBy,
            verificationVideoUrl:user.referredBy? BucketConstants.PROFILE_VERIFICATION_URL+user.verificationVideo : ""
          }
        })
        console.log("userList : ",this.userList);
        this.sweetMsg.showSuccess(response.message);
        
      }else{
        this.sweetMsg.showError("Oops, No search result found !!");
      }
    })
  }

  activate(data:any,id:string){

  }
  updateChallenge(data:any){

  }
}
