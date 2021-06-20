import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private _http:HttpClient) { }

  //get subject
  public subjects(){
    return this._http.get(`${baseUrl}/subject/`);
  }

  
}
