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
import { DialogueComponent } from './components/dialogue/dialogue.component';
import { ViewSubCategoriesComponent } from './pages/admin/subCategory/view-sub-categories/view-sub-categories.component';
import { AddSubCategoriesComponent } from './pages/admin/subCategory/add-sub-categories/add-sub-categories.component';
import { ViewQuizComponent } from './pages/admin/quiz/view-quiz/view-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ActivityQuizComponent } from './pages/admin/quiz/activity-quiz/activity-quiz.component';
import { AddQuizComponent } from './pages/admin/quiz/add-quiz/add-quiz.component';
import {MatSelectModule} from '@angular/material/select';



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
    ActivityQuizComponent
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
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
