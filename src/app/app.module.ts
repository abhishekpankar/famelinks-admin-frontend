import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ERROR_MESSAGES, NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfigServices } from './config/app-config';
import { CUSTOM_ERRORS } from './generic-helper/custom-errors';
import { LoaderInterceptor } from './interceptor/loader.interceptor';
import { AuthService } from './services/auth/auth.service';
import { CommonService } from './services/common/common.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './user-access/login/login.component';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    ReactiveFormsModule,
   BrowserAnimationsModule,
   DataTablesModule
  ],
  providers: [CommonService,AppConfigServices,
    {
      provide: CUSTOM_ERROR_MESSAGES,
      useValue: CUSTOM_ERRORS,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
    AuthService
    // {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
