import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  constructor(private http:HttpClient) { }

  //add marks
  public addMarks(marks){
    return this.http.post(`${baseUrl}/marks/`,marks);
  }
}
