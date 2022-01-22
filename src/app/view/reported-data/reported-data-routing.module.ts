import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportedDataComponent } from './reported-data/reported-data.component';

const routes: Routes = [
  {
    path: '',
    component: ReportedDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportedDataRoutingModule { }
