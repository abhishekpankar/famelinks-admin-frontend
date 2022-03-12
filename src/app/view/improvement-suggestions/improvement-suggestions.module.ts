import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImprovementSuggestionsRoutingModule } from './improvement-suggestions-routing.module';
import { ImprovementSuggestionsComponent } from './improvement-suggestions/improvement-suggestions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { AppMaterialModule } from 'src/app/modals/app-material/app-material.module';
import { CUSTOM_ERROR_MESSAGES } from 'ng-bootstrap-form-validation';
import { CUSTOM_ERRORS } from 'src/app/generic-helper/custom-errors';


@NgModule({
  declarations: [
    ImprovementSuggestionsComponent
  ],
  imports: [
    CommonModule,
    ImprovementSuggestionsRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule
  ],providers:[  {
    provide: CUSTOM_ERROR_MESSAGES,
    useValue: CUSTOM_ERRORS,
    multi: true
  }]
})
export class ImprovementSuggestionsModule { }
