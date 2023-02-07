import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import {CategoriesComponent} from "../categories/categories.component";
import {TagsComponent} from "../tags/tags.component";
import {QuizComponent} from "../quiz/quiz.component";
import { MaterialModule} from "../../modules/material/material.module";


@NgModule({
  declarations: [
    QuizComponent ,CategoriesComponent,TagsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule

  ]
})
export class AdminModule { }
