import { Component } from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
constructor(	private _categoriesService: CategoriesService,
              private _matDialog: MatDialog) {
}



}
