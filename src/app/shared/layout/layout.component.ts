import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.className = 'hold-transition sidebar-mini layout-fixed layout-navbar-fixed text-sm swal2-toast-shown swal2-shown';
    //if you are using sweetAlert npm then add these two classes in body tag --> " swal2-toast-shown swal2-shown".
    window.dispatchEvent(new Event('resize'));
    window.scrollTo(0, 0)
    // this.sweetAlert.showSuccess("ashkdjxhkajskjxnk");
  }
  ngOnDestroy(){
    document.body.className = '';
  }

}
