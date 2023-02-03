import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _http: HttpClient) { }




  getAllCategory(): Observable<any[]> {
    return this._http.get<any[]>(`${environment.baseUrl}/api/categories`);
  }

  deleteCategory(categoryId: string) {
    return this._http.delete(`${environment.baseUrl}/api/categories/${categoryId}`)
  }

  addCategory(data: any) {
    return this._http.post(`${environment.baseUrl}/api/categories`, data)
  }

  editCategory(data: any) {
    return this._http.put(`${environment.baseUrl}/api/categories`, data)
  }

  upload(file: File) {
    let formData = new FormData();
    formData.append('img', file);

    return this._http.post(`${environment.baseUrl}/api/categories/upload`, formData);
  }

}
