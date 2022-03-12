import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportQueryRoutingModule } from './support-query-routing.module';
import { SupportQueryComponent } from './support-query/support-query.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { AppMaterialModule } from 'src/app/modals/app-material/app-material.module';
import { CUSTOM_ERROR_MESSAGES } from 'ng-bootstrap-form-validation';
import { CUSTOM_ERRORS } from 'src/app/generic-helper/custom-errors';


@NgModule({
  declarations: [
    SupportQueryComponent
  ],
  imports: [
    CommonModule,
    SupportQueryRoutingModule,
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
export class SupportQueryModule { }
