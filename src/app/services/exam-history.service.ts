import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ExamHistoryService {

  constructor(private http: HttpClient) {}

  //add exam history
  //add new exam history
  public addExamHistory(examHistory){
    return this.http.post(`${baseUrl}/examHistory/`,examHistory);
  }

  //get examHistory by user and quiz
  public getExamHistoryByUserAndQuiz(user,quiz){
      return this.http.get(`${baseUrl}/examHistory/${user}/${quiz}`);
  }
}
