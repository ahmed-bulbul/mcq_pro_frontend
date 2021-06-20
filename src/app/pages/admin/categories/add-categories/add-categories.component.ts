import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {
  
  category={
    title:'',
    description:''
  }
  
  showSpinner: boolean=false;

  constructor(
    private _category:CategoryService,
    private _router:Router,
    private _snack:MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.category.title.trim()=='' || this.category.title==null){
      this._snack.open("Title Required !!",'ok',{
        duration:3000
      });
      return;
    }
    this.showSpinner=true;

    //all done
    this._category.addCategory(this.category).subscribe(
      (data:any)=>{
        this._router.navigate(['/admin/categories']);
        // this.category.title='',
        // this.category.description='',
        this.showSpinner=false;
        
        Swal.fire("Success !",'ক্যাটাগরি অ্যাড হয়েছে ','success')
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error !",'সার্ভার ইরর ','error');
        this.showSpinner=false;
      }
    );
  }

}
