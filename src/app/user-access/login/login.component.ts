import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SweetAlertsService } from 'src/app/services/sweetMsg/sweet-alerts.service';
// import { ErrorMessage } from 'ng-bootstrap-form-validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userPassword: string = '';
  userId:  string = '';
  loginFormGroup: any = FormGroup;
  // customErrorMessages: ErrorMessage[] = [
  //   {
  //     error: 'required',
  //     format: (label, error) => `${label.toUpperCase()} IS REQUIRED!`
  //   }, {
  //     error: 'pattern',
  //     format: (label, error) => `${label.toUpperCase()} IS INCORRECT`
  //   }
  // ];
  isLonginSucess:Boolean = false;
  constructor(private route: Router, private sweetAlert: SweetAlertsService, private auth: AuthService) {
    // this.auth.admin$.subscribe((user: any) => {
    //       if(user){
    //         this.route.navigate(['/dashboard']);
    //       }
    //     })

    if(this.isLonginSucess){
      this.route.navigate(['/dashboard']);
      this.sweetAlert.showInfo('User already logged in!');
    }
   }

  ngOnInit() {
    this.isLonginSucess = false;
    this.loginFormGroup = new FormGroup({
      userId: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      userPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ])
    });
  }

  //Login User
  async loginUser(details: any){ 
    let result: any;
    this.isLonginSucess = true;
    // result =  await this.auth.login(details.value.userId, details.value.userPassword);
    this.userId = details.value['userId'] ;
    console.log("details.value['userId']",details.value['userId']);
    
    this.userPassword = details.value['userPassword']
    if(this.isLonginSucess && (this.userId == 'admin@gmail.com' && this.userPassword == '12345')){
    this.route.navigate(['/dashboard']);
    this.sweetAlert.showSuccess("Sucessfully loged in");
    }else{
      // this.sweetAlert.showError(result.message);
      this.sweetAlert.showError("Please enter valid user and password!");

    }
    // if(this.userId == 'admin@gmail.com' && this.userPassword == '12345'){
  
    // } else {
    //   this.sweetAlert.showError("Please enter valid user and password!");
    // }
  }

}
