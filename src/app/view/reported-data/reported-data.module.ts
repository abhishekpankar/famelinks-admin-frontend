import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportedDataRoutingModule } from './reported-data-routing.module';
import { ReportedDataComponent } from './reported-data/reported-data.component';
import { AppMaterialModule } from 'src/app/modals/app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { CUSTOM_ERROR_MESSAGES } from 'ng-bootstrap-form-validation';
import { CUSTOM_ERRORS } from 'src/app/generic-helper/custom-errors';


@NgModule({
  declarations: [
    ReportedDataComponent
  ],
  imports: [
    CommonModule,
    ReportedDataRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule
  ],providers:[  {
    provide: CUSTOM_ERROR_MESSAGES,
    useValue: CUSTOM_ERRORS,
    multi: true
  },]
})
export class ReportedDataModule { }
