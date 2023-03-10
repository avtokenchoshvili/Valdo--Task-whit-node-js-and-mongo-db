import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isAdmin$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private _http: HttpClient, private _router: Router) {
    this._checkLogin()
  }


  //login Check
  private _checkLogin(): void {
    localStorage.getItem('user') ? this.isLoggedIn$.next(true) : this.isLoggedIn$.next(false);
    //is admin-module check
    if (localStorage.getItem('isAdmin')) {
      this.isAdmin$.next(JSON.parse(localStorage.getItem('isAdmin')!));
    }
  }

  public login(data: any): Observable<any> {
    return this._http.post<any>(`${environment.baseUrl}/api/login`, data).pipe(
      tap(() => {
        this.isLoggedIn$.next(true);
      })
    );
  }

  public logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('isAdmin');
    this.isLoggedIn$.next(false);
    this.isAdmin$.next(false);
    this._router.navigateByUrl('/home');
  }
}
