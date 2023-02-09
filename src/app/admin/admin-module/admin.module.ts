import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { CategoriesComponent} from "src/app/admin/categories/categories.component";
import {TagsComponent} from "src/app/admin/tags/tags.component";
import {QuizComponent} from "src/app/admin/quiz/quiz.component";
import { MaterialModule} from "../../modules/material/material.module";
import {AdminRoutingModule} from "./admin-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {QuizzDialogsComponent} from "../../dialogs/quizz-dialogs/quizz-dialogs.component";
import {ConfirmationDialogComponent} from "../../dialogs/confirmation-dialog/confirmation-dialog.component";
import {TagsDialogComponent} from "../../dialogs/tags-dialog/tags-dialog.component";
import {CategoriesDialogComponent} from "../../dialogs/categories-dialog/categories-dialog.component";




@NgModule({
  declarations: [
    QuizComponent ,CategoriesComponent,TagsComponent,QuizzDialogsComponent,
    ConfirmationDialogComponent,

    TagsDialogComponent,    CategoriesDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    ReactiveFormsModule

  ]
})
export class AdminModule { }
