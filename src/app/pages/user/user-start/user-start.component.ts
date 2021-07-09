import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamHistoryService } from 'src/app/services/exam-history.service';
import { LoginService } from 'src/app/services/login.service';
import { MarksService } from 'src/app/services/marks.service';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-start',
  templateUrl: './user-start.component.html',
  styleUrls: ['./user-start.component.css']
})
export class UserStartComponent implements OnInit {

  qid;
  questions;

  marksGot = 0;
  correctAnswer = 0;
  attempted = 0;
  wrongAnswer = 0;

  isSubmit = false;

  timer: any;

  curUser;

  examHistory = {
    givenAnswer: '',
    correctAnswer:'',
    question: {
      quesId: '',
    },
    user:{
      id: '',
    },
    quiz:{
      qId:'',
    }
  };

  marks = {
    
      totalMarks:'',
      correctAnswer:'',
      wrongAnswer:'',
      attempted:'',
      quiz:{
          qId:'',
      },
      user:{
          id:'',
      }
  };


  constructor(
    private LocationSt: LocationStrategy,
    private _route: ActivatedRoute,
    private _question: QuestionService,
    private _currentUser: LoginService,
    private _examHistory: ExamHistoryService,
    private _mark: MarksService,
    private _router:Router,
  ) {}

  ngOnInit(): void {

    this.preveventBackButton();
    this.qid = this._route.snapshot.params.qid;

    //getCurrent User
    this._currentUser.getCurrentUser().subscribe(
      (data:any) =>{
        this.curUser=data;
        console.log(this.examHistory.user);
        
      },
      (error)=>{
        console.log(error.error.message);
        
      }
    );

    //load question if exam was not given
    this.loadQuestions();

  }


  loadQuestions() {
    this._question.getQuestionsOfQuizForTest(this.qid).subscribe(
      (data: any) => {
        
        this.questions = data;
        this.timer = this.questions.length * 2 * 60;

        this.questions.forEach((q) => {
          q['givenAnswer'] = '';  
          
        });

        this.startTimer();
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Error in loading question of quiz', 'error');
      }
    );
    
  }

  preveventBackButton() {
    history.pushState(null, null, location.href);
    this.LocationSt.onPopState(() => {
      history.pushState(null, null, location.href);
    });
  }

  submitQuiz() {
    Swal.fire({
      title: 'Do you want to submit the quiz?',
      showCancelButton: true,
      confirmButtonText: `Submit`,
      icon: 'info',
    }).then((e) => {
      if (e.isConfirmed) {
        this.evalQuiz();

         //calculate marks
        this.calculatemarks();

      }
    });
  }

  //calculate marks
  calculatemarks(){

    this.marks.correctAnswer=this.correctAnswer.toString();
    this.marks.totalMarks=this.marksGot.toString();
    this.marks.wrongAnswer=this.wrongAnswer.toString();
    this.marks.attempted=this.attempted.toString();


    this._mark.addMarks(this.marks).subscribe((data:any)=>{
      console.log(this.marks);
    },
    (error)=>{
      console.log(error);
      
    });
  }

  startTimer() {
    let t = window.setInterval(() => {
      //code
      if (this.timer <= 0) {
        this.evalQuiz();
        clearInterval(t);
      } else {
        this.timer--;
      }
    }, 1000);
  }

  getFormattedTime() {
    let hh = Math.floor(this.timer / 3600);
    let mm = Math.floor(this.timer / 60);
    let ss = this.timer - mm * 60;
    return `${hh} hr : ${mm} min : ${ss} sec`;
  }

  evalQuiz() {
    //calculation
    this.isSubmit = true;

    this.questions.forEach((q) => {
      
      this.examHistory.question=q;
      this.examHistory.givenAnswer=q.givenAnswer; 
      this.examHistory.user.id=this.curUser.id;
      this.examHistory.correctAnswer=q.answer;


      this.marks.user.id=this.curUser.id;
      this.examHistory.quiz.qId=q.quiz.qId;
      this.marks.quiz.qId=q.quiz.qId;


      this._examHistory.addExamHistory(this.examHistory).subscribe(
        (data:any)=>{
          console.log(data);
        },
        (error)=>{
          alert(error);
        }
      );


      if (q.givenAnswer == q.answer) {
        this.correctAnswer++;
        let marksSingle =
          this.questions[0].quiz.maxMarks / this.questions.length;
        this.marksGot += marksSingle;
        
      }

      if (q.givenAnswer != q.answer && q.givenAnswer.trim() != '') {
        this.wrongAnswer++;
        // this.marksGot=this.marksGot-.50;
      }

      if (q.givenAnswer.trim() != '') {
        this.attempted++;
      }
    });




  }

  
  
}
