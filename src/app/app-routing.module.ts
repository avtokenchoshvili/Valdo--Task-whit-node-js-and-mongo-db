import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainComponent} from "./components/main/main.component";
import {SignInComponent} from "./components/header/nav/sign-in/sign-in.component";
import {SignUpComponent} from "./components/header/nav/sign-up/sign-up.component";
import {BlogComponent} from "./components/header/nav/blog/blog.component";
import {CursesComponent} from "./components/header/nav/curses/curses.component";
import {QuizComponent} from "./components/header/nav/quiz/quiz.component";
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [

  {
    path: 'home',component: MainComponent,title: 'home'
  },

  {
    path: 'profile' ,component: ProfileComponent
  },
  {
path: 'Quizzes',component: QuizComponent,title: 'Quizzes'
  },
  {
    path: 'blog',component: BlogComponent,title:'blog'
  },
  {
    path: 'Curses',component: CursesComponent, title:'Curses'
  },
  {
    path: 'sign-up',component: SignUpComponent,title:'sign-up'
  },
  {
    path: 'signin',component: SignInComponent,title: 'sign-in'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
