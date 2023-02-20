import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
   //  REACTIVE FORM
   admissionForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.maxLength(35),Validators.minLength(5)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    tel: new FormControl('',[Validators.required]),
    department: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required),
    textarea: new FormControl('',Validators.required),
  });

  // HANFLE SUBMIT 
  handleSubmit(){
    console.log(this.admissionForm)
  }
  handleClear(){
    this.admissionForm.clearValidators()
  }
}
