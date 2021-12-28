import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonService } from './services/common/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private commonService: CommonService) { 

    //To get current route when hashstrategy is used
    this.router.events.subscribe((event) => {   
      if (event instanceof NavigationEnd && event.url === '/'){
          this.router.navigateByUrl('/dashboard');
      } 
      else if (event instanceof NavigationEnd){
        let head = event.url.replace('/','').replace('_','');
        // head = head.replace('_',' ');
        this.commonService.setHeading(head);
      }
     })
      
  }
}
