import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogueComponent } from 'src/app/components/dialo/notification/dialogue.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: '',
  };
  loginSuccess: boolean=false;

  constructor(
    private snack: MatSnackBar, private login: LoginService,private router:Router,public dialog: MatDialog
    ) {}

    openDialog() {
      this.dialog.open(DialogueComponent);
    }

  ngOnInit(): void {}

  formSubmit() {
    console.log('Login button click');

    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username.trim() == null
    ) {
      this.snack.open('Username is required !!', 'ok', {
        duration: 3000,
      });
      return;
    }

    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password.trim() == null
    ) {
      this.snack.open('Password is required !!', 'ok', {
        duration: 3000,
      });
      return;
    }



    //request to server to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log(data);

        //login...
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe((user:any)=>{
            this.login.setUser(user);
            console.log(user);
            this.loginSuccess=true;
            //redirect ..ADMIN: admin-dashboard
            //redirect ..NORMAL normal-user
            if(this.login.getUserRole()=="ROLE_USER"){
              //user dashboard
              // window.location.href="/user-dashboard";
              this.router.navigate(['user-dashboard']);
              this.login.loginStatusSubject.next(true);
              
            }else if((this.login.getSuperAdminRole().authority=="ROLE_SUPER_ADMIN") || (this.login.getAdminRole().authority=="ROLE_ADMIN")){
              //admin dashboard
              // window.location.href="/admin";

              this.router.navigate(['admin']);
              this.login.loginStatusSubject.next(true);
              
            }else{
              this.login.logout();
              
            }
          }
        );
      },
      (error) => {
        console.log('Error !');
        console.log(error);
        this.snack.open(error.error.message,'ok',{
          duration:3000,
        })
      }
    );
  }
}
