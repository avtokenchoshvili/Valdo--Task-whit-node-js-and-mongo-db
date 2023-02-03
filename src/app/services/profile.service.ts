import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginService} from "./login.service";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(	private _http: HttpClient,
                private _loginService: LoginService) { }


  getProfile() {
    return this._http.get('http://localhost:8000/api/user').pipe(
      tap((userData: any) => {
        const isAdmin = JSON.stringify(userData.user.isAdmin);

        localStorage.setItem('isAdmin', isAdmin);

        this._loginService.isAdmin$.next(userData.user.isAdmin);
      })
    );
  }
}
