import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  usersForm: any = FormGroup;

  constructor(private crudeService:UsersService,private sweetMsg: SweetAlertsService) { }
  
  ngOnInit(): void {
    this.usersForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      gender: new FormControl(''),
      email: new FormControl(''),
      isBlocked: new FormControl(''),
      ageGroup: new FormControl('',),
      isVerified: new FormControl(''),
      mobileNumber: new FormControl(''),
      referredBy: new FormControl(''),
      referralCode: new FormControl(''),
      createdDate:new FormControl(),
    })
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
            verificationVideoUrl:user.verificationVideo? BucketConstants.PROFILE_VERIFICATION_URL+user.verificationVideo : ""
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
  async userAction(action:string,data:any){
  
    if(action === "View"){
      this.usersForm.patchValue({
        id: data.id,
        name: data.name ,
        // sponsor: data.sponsor,
        gender: data.gender,
        email: data.email ? data.email :"NA",
        isBlocked: data.isBlocked? "Yes" : "No",
        ageGroup: data.ageGroup,
        isVerified: data.isVerified ? "Yes" : "No",
        mobileNumber: data.mobileNumber,
        referredBy: data.referredBy ? data.referredBy : "NA",
        referralCode: data.referralCode,
        createdDate:new Date(data.createdAt)
      })
      this.selectedIndex = 1;
    }else if(action === "Verify"){
     await this.sweetMsg.confirmMsg("Are you sure you want to verify this user account..?").then(result=>{
      if(result === 1){
       let requestData = {"userId":data['id'],"isVerified":true}
        this.crudeService.verifyUser(requestData).subscribe((response: any) => {
          if (response.success) {
            this.sweetMsg.showSuccess(response.message);
            this.SFCatFilter = "VERIFIED";
            this.userList = [];
            this.getUsersList();
          } else {
            this.sweetMsg.showError(response.message);
          }
        })
      }
     })
    }
  }
}
