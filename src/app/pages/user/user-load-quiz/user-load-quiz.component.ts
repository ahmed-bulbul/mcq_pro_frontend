import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-user-load-quiz',
  templateUrl: './user-load-quiz.component.html',
  styleUrls: ['./user-load-quiz.component.css']
})
export class UserLoadQuizComponent implements OnInit {
  subCategoryId;
  quizzes;

  constructor(
    private _route:ActivatedRoute,
    private _quiz:QuizService
  ) { }

  ngOnInit(): void {
    

    this._route.params.subscribe((params)=>{
      this.subCategoryId=params.sid;
      if(this.subCategoryId==0){
        console.log("Load all the quiz");
        this._quiz.getActiveQuizzes().subscribe(
          (data:any)=>{
            this.quizzes=data;
            console.log(this.quizzes);
          },
          (error)=>{
            console.log(error);
            alert("error in loading all quizes");
          }
        );
      }else{
        console.log("Load specific quiz");
        
        this._quiz.getActiveQuizzesOfCategory(this.subCategoryId).subscribe(
          (data:any)=>{
            this.quizzes=data;
            console.warn(this.quizzes);
            
          },
          (error)=>{
            alert("error in loading quiz data");
          }
        );
      }
    });

   
  }

}
