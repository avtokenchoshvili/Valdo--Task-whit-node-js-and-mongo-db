import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Tags} from "../interfaces/tags";


@Injectable({
  providedIn: 'root'
})
export class TagsService {
  constructor(private _http: HttpClient) { }


  getAllTag(): Observable<Tags[]> {
    return this._http.get<Tags[]>(`${environment.baseUrl}/api/tags`);
  }


  deleteTag(tagId: string) {
    return this._http.delete(`${environment.baseUrl}/api/tags/${tagId}`);
  }


  addTag(data: any) {
    return this._http.post(`${environment.baseUrl}/api/tags`, data)
  }

  editTag(data: { id: string, title: string }) {
    return this._http.put(`${environment.baseUrl}/api/tags`, data);
  }





}
