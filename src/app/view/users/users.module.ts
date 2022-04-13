import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { AppMaterialModule } from 'src/app/modals/app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ERROR_MESSAGES } from 'ng-bootstrap-form-validation';
import { CUSTOM_ERRORS } from 'src/app/generic-helper/custom-errors';
import { MatChipsModule } from '@angular/material/chips';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    UsersComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    DataTablesModule
  ],
  providers:[  {
    provide: CUSTOM_ERROR_MESSAGES,
    useValue: CUSTOM_ERRORS,
    multi: true
  },]
})
export class UsersModule { }
