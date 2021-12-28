import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommonService } from 'src/app/services/common/common.service';
import { SweetAlertsService } from 'src/app/services/sweetMsg/sweet-alerts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  heading: string = '';
  constructor(private commonService: CommonService, private sweetService: SweetAlertsService, private authService: AuthService) {
    this.commonService.getHeading().subscribe((res: any)=>{
      this.heading = res;
    })
   }

  ngOnInit(): void {
  }

  async signOut(){
    let result: any;
    this.sweetService.confirmMsg('Do you want to Logout?');
    result =  await this.sweetService.confirmMsg('Do you want to Logout?');
    console.log("Result",result)
    if(result == 1){
      // this.authService.signOut();
    }
  }

}
