import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {QuizzService} from "../../services/quizz.service";
import {Quizz} from "../../interfaces/quizz";

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent {
  quizes$!: Observable<Quizz[]>;


  constructor(
    private _quizService: QuizzService
  ) { }
  ngOnInit(): void {
    this.quizes$ = this._quizService.getQuizes();
  }
}
