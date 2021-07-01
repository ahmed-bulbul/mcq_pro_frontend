import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.css']
})
export class UserActivityComponent implements OnInit {

 
  subcategoryId;

  constructor(private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe((params)=>{
      this.subcategoryId=params.sid;
      console.log(this.subcategoryId);
    });
  }

}