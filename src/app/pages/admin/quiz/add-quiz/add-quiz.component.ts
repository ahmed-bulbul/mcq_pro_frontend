import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';
import { SubjectService } from 'src/app/services/subject.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  subCategories;
  subjects = [];
  subCategoryId;

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
    private _subject:SubjectService
  ) { }

  ngOnInit(): void {

    this._route.params.subscribe((params)=>{
      this.subCategoryId=params.sid;
      console.warn(this.subCategoryId)
      //subject
      this._subject.subjects().subscribe(
        (data:any)=>{
          console.log(data);
          this.subjects=data;
        },
        (error)=>{
          console.log(error.error.message);
          alert(error.error.message);
        }
      );

      //subcategory
      this._subCat.getSubcategoryById(this.subCategoryId).subscribe(
        (data:any)=>{
          console.log(data);
            this.subCategories=data as string[];
        },
        (error)=>{
          console.log(error.error.message);
        }
      )
    });
   
  }

  //add quiz
  addQuiz(){
    //validation 
    if (this.quizData.title.trim() == '' || this.quizData.title == null) {
      this._snack.open('Title Required !!', 'ok', {
        duration: 3000,
      });
      return;
    }

    //call server
    this._quiz.addQuiz(this.quizData).subscribe((data) => {
      Swal.fire('Success !!', 'quiz is added', 'success');

      this.quizData = {
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
    },
    
    (error)=>{
      Swal.fire('Error !!', 'Erro while adding quiz', 'error');
      console.log(error);
    });

  }

}
