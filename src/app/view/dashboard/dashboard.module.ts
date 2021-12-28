import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AppMaterialModule } from 'src/app/modals/app-material/app-material.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppMaterialModule
  ]
})
export class DashboardModule { }
