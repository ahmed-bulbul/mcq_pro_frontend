import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css'],
})
export class ViewQuizComponent implements OnInit {
  quizzes = [];
  sid;
  subjectSelected: number;
  subjects = [];

  constructor(
    private _quiz: QuizService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _subject: SubjectService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.sid = params.sid;
      console.log(this.sid);
      this._quiz.getQuizzesOfSubCategory(this.sid).subscribe(
        (data: any) => {
          this.quizzes = data;
          console.log(this.quizzes);
        },
        (error) => {
          console.log(error.error.message);
        }
      );
    });

    //subject
    this._subject.subjects().subscribe(
      (data: any) => {
        this.subjects = data;
      },
      (error) => {
        console.log(error.error.message);
        alert(error.error.message);
      }
    );
  }

  onSubjectSelected(subjectSelected: any): void {
    this._route.params.subscribe((params) => {
      this.sid = params.sid;
      console.log(this.sid);
      this._quiz
        .getQuizBySubjectIdAndSubCategoryId(subjectSelected, this.sid)
        .subscribe(
          (data: any) => {
            this.quizzes = data;
          },
          (error) => {
            console.log(error.error.message);
          }
        );
    });

    if (subjectSelected == 0) {
      this._route.params.subscribe((params) => {
        this.sid = params.sid;
        this._quiz.getQuizzesOfSubCategory(this.sid).subscribe(
          (data: any) => {
            this.quizzes = data;
            console.log(this.quizzes);
          },
          (error) => {
            console.log(error.error.message);
          }
        );
      });
    }
  }
}
