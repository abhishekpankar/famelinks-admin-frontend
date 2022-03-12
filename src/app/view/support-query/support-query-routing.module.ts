import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportQueryComponent } from './support-query/support-query.component';

const routes: Routes = [
  {
    path: '',
    component: SupportQueryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportQueryRoutingModule { }
