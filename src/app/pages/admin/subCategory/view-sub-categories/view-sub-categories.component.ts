import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-view-sub-categories',
  templateUrl: './view-sub-categories.component.html',
  styleUrls: ['./view-sub-categories.component.css']
})
export class ViewSubCategoriesComponent implements OnInit {

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
