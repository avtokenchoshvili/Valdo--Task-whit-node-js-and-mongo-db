import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { CategoriesComponent} from "src/app/admin/categories/categories.component";
import {TagsComponent} from "src/app/admin/tags/tags.component";
import {QuizComponent} from "src/app/admin/quiz/quiz.component";
import { MaterialModule} from "../../modules/material/material.module";
import {AdminRoutingModule} from "./admin-routing.module";


@NgModule({
  declarations: [
    QuizComponent ,CategoriesComponent,TagsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule

  ]
})
export class AdminModule { }
