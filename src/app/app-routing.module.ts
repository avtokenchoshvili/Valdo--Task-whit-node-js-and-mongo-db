import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainComponent} from "./components/main/main.component";
import {SignInComponent} from "./components/header/nav/sign-in/sign-in.component";
import {SignUpComponent} from "./components/header/nav/sign-up/sign-up.component";
import {BlogComponent} from "./components/header/nav/blog/blog.component";
import {CursesComponent} from "./components/header/nav/curses/curses.component";
import {QuizessComponent} from "./components/header/nav/Quizess/quizess.component";
import { ProfileComponent } from './profile/profile.component';
import {AdminPgComponent} from "./admin/admin-pg/admin-pg.component";



const routes: Routes = [

  {
    path: 'home',component: MainComponent,title: 'home'
  },
  // {path:'admin-pg' ,component:AdminPgComponent ,title:'admin-pg'},
  { path: 'admin-pg', component:AdminPgComponent, loadChildren: () => import('./admin/admin-module/admin.module').then(m => m.AdminModule) },

  {
    path: 'profile' ,component: ProfileComponent
  },
  {
path: 'Quizzes',component: QuizessComponent,title: 'Quizzes'
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
    path: 'sign-in',component: SignInComponent,title: 'sign-in'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
