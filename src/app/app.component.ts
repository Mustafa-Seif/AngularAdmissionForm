import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admissionForm';
  isLoader:boolean=true;
  ngOnInit(){
    // LOADER 
    addEventListener('load',()=>{
      setTimeout(()=>{this.isLoader = false},2000)
    })
  }
}
