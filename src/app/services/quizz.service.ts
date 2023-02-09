import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Categories} from "../interfaces/categories";
import {environment} from "../../environments/environment";
import {Quizz} from "../interfaces/quizz";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor(private _http: HttpClient) {}


  addQuiz(data: Quizz) {
    return this._http.post(`${environment.baseUrl}/api/quiz`, data);
  }
  getQuiz(id: string): Observable<Quizz> {
    return this._http.get<any>(`${environment.baseUrl}/api/quiz/${id}`);
  }
  editQuiz(quizId: string, data: Quizz): Observable<Quizz> {
    return this._http.put<Quizz>(`${environment.baseUrl}/api/quiz/${quizId}`, data);
  }

  getQuizes(): Observable<any[]> {
    return this._http.get<any[]>(`${environment.baseUrl}/api/quiz/`);
  }
  checkQuiz(data: {quizId: string, answers: number[]}): Observable<any[]> {
    return this._http.post<any[]>(`${environment.baseUrl}/api/quiz/check`, data);
  }
}
