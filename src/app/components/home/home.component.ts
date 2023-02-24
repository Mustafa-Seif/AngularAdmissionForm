import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormInterface } from 'src/app/interfaces/form-interface';
import { FormServiceService } from 'src/app/services/form-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  p: number = 1;
    formData: any[] = [];  
    constructor(private _Form:FormServiceService){}
  ngOnInit(){
    this._Form.getFormData().subscribe((val)=>{
      this.formData = val
      console.log( this.formData)
    })
    
  }
  //  REACTIVE FORM AND VALIDION
  admissionForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(35),
      Validators.minLength(5),
      Validators.pattern(/[A-Za-z0-9]/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('',[
      Validators.required,
      Validators.maxLength(14),
      Validators.minLength(11),
    ]),
    salery: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(6),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.maxLength(35),
      Validators.minLength(5),
      Validators.pattern(/[A-Za-z0-9]/),
    ]),
    position: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    availableDate: new FormControl('', Validators.required),
    experience: new FormControl('', Validators.required),

  });

  // HANDLE SUBMIT
  handleSubmit() {
    if (this.admissionForm.status === 'VALID') {
      // FIRE SWAL ALERT 
      Swal.fire('Success!', 'Your form have been sent!', 'success');
      // SHOW FORM DATA IN CONSOLE
      console.log(this.admissionForm);
    }
  }
  handleClear() {
    this.admissionForm.reset();
  }
}
