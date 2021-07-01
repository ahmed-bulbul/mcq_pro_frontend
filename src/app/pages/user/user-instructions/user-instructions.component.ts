import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private _route:ActivatedRoute,
    private _quiz:QuizService,
    private _router:Router, 
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
