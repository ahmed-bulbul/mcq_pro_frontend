import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamHistoryService } from 'src/app/services/exam-history.service';
import { LoginService } from 'src/app/services/login.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-instructions',
  templateUrl: './user-instructions.component.html',
  styleUrls: ['./user-instructions.component.css']
})
export class UserInstructionsComponent implements OnInit {

  qId;
  quiz;
  curUser;
  examHistoryCounter=[];

  constructor(
    private _route:ActivatedRoute,
    private _quiz:QuizService,
    private _router:Router, 
    private _examHistory:ExamHistoryService,
    private _currentUser:LoginService
  ) { }

  ngOnInit(): void {
    this.qId=this._route.snapshot.params.qid;
    this._quiz.getQuiz(this.qId).subscribe(
      (data:any)=>{
        this.quiz=data;
      },
      (error)=>{
        console.log(error);
        alert("error in loading quiz data");
      }
    );

    //getCurrent User
    this._currentUser.getCurrentUser().subscribe(
      (data:any) =>{
        this.curUser=data;
        this.examHistoryDataFun();
        
      },
      (error)=>{
        console.log(error.error.message);
        
      }
    );
  }

  //exaam history
  examHistoryDataFun(){
    this._examHistory.getExamHistoryByUserAndQuiz(this.curUser.id,this.qId).subscribe((data:any)=>{
      
      this.examHistoryCounter=data;
  
    },
    (error)=>{
      alert(error);
    }
    );
  }

  startQuiz(){ 
    Swal.fire({
      title: 'Do you want to start the quiz?',
      showCancelButton: true,
      confirmButtonText: `Start`,
      denyButtonText: `Don't save`,
      icon:'info',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        
        this._router.navigate(['/start/'+ this.qId]);

      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

}
