import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  subCategories = [];
  subjects = [];
  categoryId;

  quizData = {
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: true,
    subCategory: {
      sid: '',
    },
    subject:{
      subjectId:'',
    }
  };

  constructor(
    private _subCat:SubCategoryService,
    private _snack:MatSnackBar,
    private _quiz:QuizService,
    private _route:ActivatedRoute,
  ) { }

  ngOnInit(): void {

    // this._route.params.subscribe((params)=>{
    //   this.categoryId=params.cId;
    // });
   
  }

}
