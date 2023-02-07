import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Categories} from "../interfaces/categories";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }

  registerUser(data:any){
    return this._http.post(`${environment.baseUrl}/api/registration` ,data);
  }
}
