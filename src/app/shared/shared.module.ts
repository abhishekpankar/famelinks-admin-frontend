import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { SharedRoutingModule } from './shared-routing.module';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { AppMaterialModule } from '../modals/app-material/app-material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AppMaterialModule,
    RouterModule,
    FormsModule
  ],
  exports: [LoaderComponent]
})
export class SharedModule { }
