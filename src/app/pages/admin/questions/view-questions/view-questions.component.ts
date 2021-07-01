import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {

  qId;
  qTitle;
  questions=[];


  constructor(
    private _route:ActivatedRoute,
    private _question:QuestionService,
    private _snack:MatSnackBar,
  ) { }

  ngOnInit(): void {

    this.qId=this._route.snapshot.params.qId;
    this.qTitle=this._route.snapshot.params.title;
    this._question.getQuestionsOfQuiz(this.qId).subscribe((data:any)=>{

      console.log(data);
      this.questions=data;
    },
    
    (error)=>{

        console.log(error);
      });
  }

   //delete question
   deleteQuestion(qid){
    Swal.fire({
      icon : 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title:'Are you sure , want to delete this question?',

    }).then((result)=>{
      if(result.isConfirmed){
        //confirm 
        this._question.deleteQuestion(qid).subscribe(
          (data)=>{
            this._snack.open('Question Deleted','',{
              duration:3000
            });
            this.questions=this.questions.filter((q)=>q.quesId != qid);
          },
          (error)=>{
            this._snack.open('Error in deleting  question','',{
              duration:3000,
              
            });
            console.log(error);
          }
        )
      }
    });
  }

}
