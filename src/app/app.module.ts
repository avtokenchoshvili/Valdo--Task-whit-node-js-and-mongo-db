import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/header/nav/nav.component';
import { CursesComponent } from './components/header/nav/curses/curses.component';
import { ResumeComponent } from './components/header/nav/resume/resume.component';
import { QuizComponent } from './components/header/nav/quiz/quiz.component';
import { BlogComponent } from './components/header/nav/blog/blog.component';
import { SignInComponent } from './components/header/nav/sign-in/sign-in.component';
import { SignUpComponent } from './components/header/nav/sign-up/sign-up.component';

import { FooterComponent } from './components/footer/footer.component';
import {MainComponent} from "./components/main/main.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CursesComponent,
    ResumeComponent,
    QuizComponent,
    BlogComponent,
    SignInComponent,
    SignUpComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
