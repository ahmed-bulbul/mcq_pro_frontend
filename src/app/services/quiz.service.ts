import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }

  //get quiz
  public quizzes(){
    return this._http.get(`${baseUrl}/quiz/`);
  }

  //add quiz
  public addQuiz(quiz){
    return this._http.post(`${baseUrl}/quiz/`,quiz);
  }

  //get quizzes of category
  public getQuizzesOfSubCategory(sid){
    return this._http.get(`${baseUrl}/quiz/subCategory/${sid}`);
  }

  //get quizBySubjectIdAndSubCategoryId
  public getQuizBySubjectIdAndSubCategoryId(subjectId,subCategoryId){
    return this._http.get(`${baseUrl}/quiz/subject/${subjectId}/subCategory/${subCategoryId}`);
  }

  //get active quizzes
  public getActiveQuizzes(){
    return this._http.get(`${baseUrl}/quiz/active`);
  }

  //get active quizzes of category
  public getActiveQuizzesOfCategory(sid){
    return this._http.get(`${baseUrl}/quiz/subCategory/active/${sid}`);
  }

    //get the single quiz
    public getQuiz(qId){
      return this._http.get(`${baseUrl}/quiz/${qId}`);
    }


}
