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

  identyfire(i:number ,item:Categories){
console.log(i,item);
return item._id
  }
  addCategory(cat?:Categories) {
    let dialog = this._matDialog.open(CategoriesDialogComponent, {
      width: '600px',

      data: cat
    });
    dialog.afterClosed().subscribe(() => {
      this.getCategoriesData();
    });
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
