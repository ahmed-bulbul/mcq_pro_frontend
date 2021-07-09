import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  public Editor =ClassicEditor;
  qId;
  qTitle;
  question = {
    quiz: {},
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
    explanation:'',
    startDate:'',
  };

  constructor(
    private _route: ActivatedRoute,
    private _question: QuestionService
  ) { }

  ngOnInit(): void {

    this.qId = this._route.snapshot.params.qId;
    console.log("OK"+this._route.snapshot.params.qId);
    
    this.qTitle = this._route.snapshot.params.title;
    this.question.quiz['qId'] = this.qId;
  }

  formSubmit(){
    console.warn(this.question);
    
    //validation
    if (this.question.content.trim() == '' || this.question.content == null) {
      return;
    }

    if (this.question.option1.trim() == '' || this.question.option1 == null) {
      return;
    }

    if (this.question.option2.trim() == '' || this.question.option2 == null) {
      return;
    }
    if (this.question.answer.trim() == '' || this.question.answer == null) {
      return;
    }

    //form submit
    this._question.addQuestion(this.question).subscribe((data:any)=>{
      Swal.fire("Success","Question Added, Add another one","success");
      this.question.content='';
      this.question.option1='';
      this.question.option2='';
      this.question.option3='';
      this.question.option4='';
      this.question.answer='';
      
    },
    (error)=>{
      Swal.fire("Error!","Error in adding question","error");
      alert(error.error.message);
    });
  }
  }


