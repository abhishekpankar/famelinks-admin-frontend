import { CommonModule } from '@angular/common';
import { ChallengesRoutingModule } from './challenges-routing.module';
import { ChallengesComponent } from './challenges/challenges.component';
import { AppMaterialModule } from 'src/app/modals/app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CUSTOM_ERROR_MESSAGES } from 'ng-bootstrap-form-validation';
import { CUSTOM_ERRORS } from 'src/app/generic-helper/custom-errors';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    ChallengesComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    ChallengesRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule
  ],
  providers:[  {
    provide: CUSTOM_ERROR_MESSAGES,
    useValue: CUSTOM_ERRORS,
    multi: true
  },]
})
export class ChallengesModule { }
