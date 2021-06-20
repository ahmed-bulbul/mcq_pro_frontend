import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity-quiz',
  templateUrl: './activity-quiz.component.html',
  styleUrls: ['./activity-quiz.component.css']
})
export class ActivityQuizComponent implements OnInit {

  subcategoryId;

  constructor(private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe((params)=>{
      this.subcategoryId=params.sid;
      console.log(this.subcategoryId);
    });
  }

}
