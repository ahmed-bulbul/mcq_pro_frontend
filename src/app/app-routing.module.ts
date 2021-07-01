import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoriesComponent } from './pages/admin/categories/add-categories/add-categories.component';
import { ViewCategoriesComponent } from './pages/admin/categories/view-categories/view-categories.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AddQuestionComponent } from './pages/admin/questions/add-question/add-question.component';
import { ViewQuestionsComponent } from './pages/admin/questions/view-questions/view-questions.component';
import { ActivityQuizComponent } from './pages/admin/quiz/activity-quiz/activity-quiz.component';
import { AddQuizComponent } from './pages/admin/quiz/add-quiz/add-quiz.component';
import { ViewQuizComponent } from './pages/admin/quiz/view-quiz/view-quiz.component';
import { ViewSubCategoriesComponent } from './pages/admin/subCategory/view-sub-categories/view-sub-categories.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserActivityComponent } from './pages/user/user-activity/user-activity.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { UserInstructionsComponent } from './pages/user/user-instructions/user-instructions.component';
import { UserLoadQuizComponent } from './pages/user/user-load-quiz/user-load-quiz.component';
import { UserStartComponent } from './pages/user/user-start/user-start.component';
import { UserSubCategoryComponent } from './pages/user/user-sub-category/user-sub-category.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',

  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
  },
  {
    path:'admin',
    component:DashboardComponent,
     canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:WelcomeComponent,
      },
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:'categories',
        component:ViewCategoriesComponent,
      },
      {
        path:'add-category',
        component:AddCategoriesComponent,
      },
      {
        path:'subCategory/:categoryId',
        component:ViewSubCategoriesComponent,
      },
      {
        path:'quiz/activity/:sid',
        component:ActivityQuizComponent,
      },
      {
        path:'quiz/:sid',
        component:ViewQuizComponent,
      },
      {
        path:'add-quiz/:sid',
        component:AddQuizComponent,
      },
      {
        path:'quiz/subject/:subjectId',
        component:ViewQuizComponent
      },
      {
        path:'add-question/:qId/:title',
        component:AddQuestionComponent
      },
      {
        path:'view-questions/:qId/:title',
        component:ViewQuestionsComponent
      },

    ],

  },
  
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate:[NormalGuard],
    children:[
      {
        path:'',
        component:UserHomeComponent
      },
      {
        path:'subCategory/:categoryId',
        component:UserSubCategoryComponent
      },
      {
        path:'quiz/activity/:sid',
        component:UserActivityComponent,
      },
      {
        path:'quiz/:sid',
        component:UserLoadQuizComponent,
      },
      {
        path:'instructions/:qid',
        component:UserInstructionsComponent 
      },
      

    ]
  },
  {
    path:'start/:qid',
    component:UserStartComponent,
    canActivate:[NormalGuard],
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
