import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import {CategoriesComponent} from "../categories/categories.component";
import {TagsComponent} from "../tags/tags.component";
import {QuizComponent} from "../quiz/quiz.component";



@NgModule({
  declarations: [
    QuizComponent ,CategoriesComponent,TagsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

  ]
})
export class AdminModule { }
