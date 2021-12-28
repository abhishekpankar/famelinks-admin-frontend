import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Admin, AuthService } from 'src/app/services/auth/auth.service';
import { CommonService } from 'src/app/services/common/common.service';
declare var $: any;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  navMenu: any[] = [];
  adminData: any = {};
  searchModName: any;

  constructor(private router: Router, private commonService: CommonService, private auth: AuthService) { 
    if(this.navMenu.length > 0){
    this.router.events.subscribe((event) => {   
      if (event instanceof NavigationEnd){
          this.navMenu.forEach((itm: any)=>{
            if(itm.url && itm.url == event.url){
              this.commonService.setHeading(itm.moduleName);
            } else {
              if(itm.childMenu.length > 0){
                itm.childMenu.forEach((child: any)=>{
                  if(child.url && child.url == event.url){
                    this.commonService.setHeading(child.name);
                  }
                })
              }
            }
          })
            this.router.navigateByUrl('/dashboard');
          }
        })
      }
      // this.auth.admin$.subscribe((user: any) => {
      //   this.adminData = <Admin>user;
      // })
  }

  ngOnInit(): void {
    $('[data-widget="treeview"]').Treeview('init');
    $('[data-widget="treeview"]').Layout('init');
    $('[data-widget="treeview"]').PushMenu('init');
 
    let menu = [
      {moduleName: 'Dashboard', childMenu: [], url:'/dashboard'},
      {moduleName: 'Challenges', childMenu: [], url:'/challenges'},

    ]
    this.navMenu = menu;
  }

 
}
