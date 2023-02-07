import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {MatDialog} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {Categories} from "../../interfaces/categories";

import {CategoriesDialogComponent} from "../../dialogs/categories-dialog/categories-dialog.component";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent  implements OnInit {
  categoriesData$!:Observable<Categories[]>


constructor(	private _categoriesService: CategoriesService,
              private _matDialog: MatDialog) {
}
  ngOnInit(): void {
    this.getCategoriesData()
  }
private getCategoriesData(){
    this.categoriesData$ = this._categoriesService.getAllCategory();
}


  addCategory(cat?:Categories) {
    let dialog = this._matDialog.open(CategoriesDialogComponent, {
      width: '440px',
      data: cat
    })
  }

  delete(categoryId: string) {
    this._categoriesService.deleteCategory(categoryId).subscribe(
      () => {
        this.getCategoriesData();
      },
      err => {
        console.log(err);
      }
    )
  }
}
