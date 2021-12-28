// import { FormGroup } from '@angular/forms';

// // custom validator to check that two fields match
// export function MustMatch(controlName: string, matchingControlName: string) {
//     return (formGroup: FormGroup) => {
//         const control = formGroup.controls[controlName];
//         const matchingControl = formGroup.controls[matchingControlName];

//         if (matchingControl.errors && !matchingControl.errors.mustMatch) {
//             // return if another validator has already found an error on the matchingControl
//             return;
//         }

//         // set error on matchingControl if validation fails
//         if (control.value !== matchingControl.value) {
//             matchingControl.setErrors({ mustMatch: true });
//         } else {
//             matchingControl.setErrors(null);
//         }
//     }
// }

// this.updateTestQuestion = this.formBuilder.group({
//     id: [''],
//     uquestion: ['', [Validators.required, this.noWhitespaceValidator]],
//     uoption1: ['', [Validators.required, this.noWhitespaceValidator]],
//     uoption2: ['', [Validators.required, this.noWhitespaceValidator]],
//     uoption3: ['', [Validators.required, this.noWhitespaceValidator]],
//     uoption4: ['', [Validators.required, this.noWhitespaceValidator]],
//     uoption5: [''],
//     uanswer: ['', Validators.required],
//     docId: ['']
//   }, { validator: this.sameOptionsValidation('uoption1', 'uoption2', 'uoption3', 'uoption4') })

// }


// public sameOptionsValidation(option1: string, option2: string, option3: string, option4: string) {
//     return (formGroup: FormGroup) => {
//       const controlOption1 = formGroup.controls[option1];
//       const controlOption2 = formGroup.controls[option2];
//       const controlOption3 = formGroup.controls[option3];
//       const controlOption4 = formGroup.controls[option4];
//       if (controlOption4.errors && !controlOption4.errors.mustMatch || controlOption3.errors && !controlOption3.errors.mustMatch
//         || controlOption2.errors && !controlOption2.errors.mustMatch || controlOption1.errors && !controlOption1.errors.mustMatch) {
//         // return if another validator has already found an error on the matchingControl
//         return;
//       }
//       if ((controlOption1.value).trim() == (controlOption2.value).trim() || (controlOption1.value).trim() == (controlOption3.value).trim() || (controlOption1.value).trim() == (controlOption4.value).trim()) {
//         controlOption1.setErrors({ mustMatch: true })
//       } else {
//         controlOption1.setErrors(null)
//       }
//       if ((controlOption1.value).trim() == (controlOption2.value).trim() || (controlOption2.value).trim() == (controlOption3.value).trim() || (controlOption2.value).trim() == (controlOption4.value).trim()) {
//         controlOption2.setErrors({ mustMatch: true })
//       }
//       else {
//         controlOption2.setErrors(null)

//       }
//       if ((controlOption3.value.trim()) == (controlOption1.value).trim() || (controlOption3.value).trim() == (controlOption2.value).trim() || (controlOption3.value).trim() == (controlOption4.value).trim()) {
//         controlOption3.setErrors({ mustMatch: true })
//       }
//       else {
//         controlOption3.setErrors(null)
//       }
//       if ((controlOption4.value).trim() == (controlOption1.value).trim() || (controlOption4.value).trim() == (controlOption2.value).trim() || (controlOption4.value).trim() == (controlOption3.value).trim()) {
//         controlOption4.setErrors({ mustMatch: true })
//       }
//       else {
//         controlOption4.setErrors(null)
//       }
//     }
//   }