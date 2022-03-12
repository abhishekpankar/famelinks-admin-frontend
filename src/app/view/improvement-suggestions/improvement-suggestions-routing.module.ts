import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprovementSuggestionsComponent } from './improvement-suggestions/improvement-suggestions.component';

const routes: Routes = [
  {
    path: '',
    component: ImprovementSuggestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImprovementSuggestionsRoutingModule { }
