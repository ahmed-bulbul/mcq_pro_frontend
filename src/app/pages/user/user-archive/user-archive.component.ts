import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-user-archive',
  templateUrl: './user-archive.component.html',
  styleUrls: ['./user-archive.component.css']
})
export class UserArchiveComponent implements OnInit {

  quizzes;
  subCategoryId;

  constructor(
    private _quiz:QuizService,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {

    this._route.params.subscribe((params)=>{
      this.subCategoryId=params.sid;
      this._quiz.getArchiveQuiz(this.subCategoryId).subscribe((data:any)=>{
        this.quizzes=data;
        console.log(this.quizzes);
      },
      (error)=>{
        console.log(error);
        
      });
      
    });

  }

}
