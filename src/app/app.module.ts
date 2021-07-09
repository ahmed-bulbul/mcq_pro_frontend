import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AddCategoriesComponent } from './pages/admin/categories/add-categories/add-categories.component';
import { ViewCategoriesComponent } from './pages/admin/categories/view-categories/view-categories.component';
import { SpinnersAngularModule } from 'spinners-angular';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogueComponent } from './components/dialo/notification/dialogue.component';
import { ViewSubCategoriesComponent } from './pages/admin/subCategory/view-sub-categories/view-sub-categories.component';
import { AddSubCategoriesComponent } from './pages/admin/subCategory/add-sub-categories/add-sub-categories.component';
import { ViewQuizComponent } from './pages/admin/quiz/view-quiz/view-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ActivityQuizComponent } from './pages/admin/quiz/activity-quiz/activity-quiz.component';
import { AddQuizComponent } from './pages/admin/quiz/add-quiz/add-quiz.component';
import {MatSelectModule} from '@angular/material/select';
import { AddQuestionComponent } from './pages/admin/questions/add-question/add-question.component';
import { ViewQuestionsComponent } from './pages/admin/questions/view-questions/view-questions.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { UserSubCategoryComponent } from './pages/user/user-sub-category/user-sub-category.component';
import { UserActivityComponent } from './pages/user/user-activity/user-activity.component';
import { UserLoadQuizComponent } from './pages/user/user-load-quiz/user-load-quiz.component';
import { UserStartComponent } from './pages/user/user-start/user-start.component';
import { UserInstructionsComponent } from './pages/user/user-instructions/user-instructions.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { UserArchiveComponent } from './pages/user/user-archive/user-archive.component';
import { UserViewArchiveComponent } from './pages/user/user-view-archive/user-view-archive.component';
import { ExplanationComponent } from './components/dialo/explanation/explanation.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    AddCategoriesComponent,
    ViewCategoriesComponent,
    DialogueComponent,
    ViewSubCategoriesComponent,
    AddSubCategoriesComponent,
    AddQuizComponent,
    ViewQuizComponent,
    ActivityQuizComponent,
    AddQuestionComponent,
    ViewQuestionsComponent,
    UserSidebarComponent,
    UserHomeComponent,
    UserSubCategoryComponent,
    UserActivityComponent,
    UserLoadQuizComponent,
    UserStartComponent,
    UserInstructionsComponent,
    UserArchiveComponent,
    UserViewArchiveComponent,
    ExplanationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    SpinnersAngularModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
      
    }),
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
