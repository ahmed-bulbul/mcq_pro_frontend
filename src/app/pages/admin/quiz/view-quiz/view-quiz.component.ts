import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent implements OnInit {

  quizzes=[];
  sid;

  constructor(
    private _quiz: QuizService,
    private _router:Router,
    private _route:ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this._route.params.subscribe((params)=>{
      this.sid=params.sid;
      console.log(this.sid);
      this._quiz.getQuizzesOfSubCategory(this.sid).subscribe(
        (data:any)=>{
          this.quizzes=data;
          console.log(this.quizzes);
        },
        (error)=>{
          console.log(error.error.message);
        }
      )
    });
  
}

}