import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriesComponent} from "../categories/categories.component";
import {TagsComponent} from "../tags/tags.component";
import {QuizComponent} from "../quiz/quiz.component";

const routes: Routes = [
  {path:'categories' , component:CategoriesComponent , title: 'Categories'},
  {path:'tags' ,component:TagsComponent ,title : 'tags'},
  {path:'quiz' ,component:QuizComponent , title:'quiz'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
