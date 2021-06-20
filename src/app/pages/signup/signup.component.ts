import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snake:MatSnackBar,private router:Router) { }
  showSpinner: boolean=false;

  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'', 

  }

  ngOnInit(): void {
  }

  formSubmit(){
    this.showSpinner=true;

    console.log(this.user);

    //validate
    if(this.user.username=='' ||this.user.username==null ){
      // alert('user is required');
       this.snake.open('Username is required !!','ok',{
         duration:3000,
       });
       return;
     }
    if(this.user.password=='' || this.user.password==null){
      this.snake.open('Password is required !!','ok',{
        duration:3000,
      });
      return;
    }
    if(this.user.firstName=='' || this.user.firstName==null){
      this.snake.open('First Name is required !!','ok',{
        duration:3000,
      });
      return;
    }
    if(this.user.lastName=='' || this.user.lastName==null){
      this.snake.open('Last Name is required !!','ok',{
        duration:3000,
      });
      return;
    }
    if(this.user.email=='' || this.user.email==null){
      this.snake.open('Email is required !!','ok',{
        duration:3000,
      });
      return;
    }
    if(this.user.phone=='' || this.user.phone==null){
      this.snake.open('Phone is required !!','ok',{
        duration:3000,
      });
      return;
    }


    //addUSer: userService
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        //success
        console.log(data);
        Swal.fire('Successfully registered !!','User id is'+data.id,'success');
        this.showSpinner=false;
        this.router.navigate(['login']);
      },
      (error)=>{
        //error
        console.log(error);
      
        this.snake.open(error.error.message,'ok',{
          duration:3000,
        })
        this.showSpinner=false;

      }
    )
 
  }

  //this.user

}
