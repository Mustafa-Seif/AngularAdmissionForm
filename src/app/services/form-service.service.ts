import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormInterface } from '../interfaces/form-interface';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  private _URL = 'assets/data/db.json';
  constructor(private http:HttpClient) { }

  getFormData():Observable<any[]>{
    return this.http.get<FormInterface[]>(this._URL)
  }
  
}
