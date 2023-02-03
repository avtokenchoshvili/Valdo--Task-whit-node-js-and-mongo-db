import { Component } from '@angular/core';
import {Categories} from "../../../interfaces/categories";
import {Observable} from "rxjs";

import {CategoriesService} from "../../../services/categories.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
categoriesCard$!:Observable<Categories[]>;

  constructor(private _catService:CategoriesService) {


  }

  ngOnInit() {
    this.categoriesCard$ = this._catService.getAllCategory();
}
}
