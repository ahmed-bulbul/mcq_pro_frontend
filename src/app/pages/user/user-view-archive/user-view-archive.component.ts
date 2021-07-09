import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-view-archive',
  templateUrl: './user-view-archive.component.html',
  styleUrls: ['./user-view-archive.component.css']
})
export class UserViewArchiveComponent implements OnInit {

  questions;
  qid;


  constructor(private _question: QuestionService,private _route: ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {
    this.qid = this._route.snapshot.params.qid;
    this._question.getQuestionsOfQuizForTest(this.qid).subscribe((data:any)=>{
      this.questions=data;
      console.log(this.questions);
      
    },
    (error)=>{
      console.log(error);
      
    });
  }
  explain(quesId){
    Swal.fire(quesId)
  }
  answer(answer){
    Swal.fire(answer);
  }
  favorite(quesId){
    Swal.fire("ফেভারিটে যুক্ত হয়েছে ");
  }

}
