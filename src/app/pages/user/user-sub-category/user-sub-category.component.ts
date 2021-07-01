import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-user-sub-category',
  templateUrl: './user-sub-category.component.html',
  styleUrls: ['./user-sub-category.component.css']
})
export class UserSubCategoryComponent implements OnInit {


  subCategories=[];
  categoryId;

  constructor(private _subCategories:SubCategoryService,private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe((params)=>{
      this.categoryId=params.categoryId;
      console.log(this.categoryId);
      this._subCategories.subCategoriesOfCategory(this.categoryId).subscribe(
        (data:any)=>{
          
          this.subCategories=data;
          console.log(this.subCategories);
        },
        (error)=>{
          console.log(error.error.message);
        }
      )
    });
  }

}
