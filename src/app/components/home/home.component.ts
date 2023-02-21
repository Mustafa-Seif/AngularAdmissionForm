import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  //  REACTIVE FORM AND VALIDION
  admissionForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(35),
      Validators.minLength(5),
      Validators.pattern(/[A-Za-z0-9]/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl('', [
      Validators.required,
      Validators.maxLength(14),
      Validators.minLength(11),
    ]),
    salery: new FormControl('', [
      Validators.required,
  
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.maxLength(35),
      Validators.minLength(5),
      Validators.pattern(/[A-Za-z0-9]/),
    ]),
    department: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  });

  // HANDLE SUBMIT
  handleSubmit() {
    if (this.admissionForm.status === 'VALID') {
      // FIRE SWAL ALERT 
      Swal.fire('Success!', 'Your form have been sent!', 'success');
      // SHOW FORM DATA IN CONSOLE
      console.log(this.admissionForm);
      // CLEAR INPUTS AFTER SUBMIT 
      this.handleClear()
    }
  }
  handleClear() {
    this.admissionForm.reset();
  }
}
