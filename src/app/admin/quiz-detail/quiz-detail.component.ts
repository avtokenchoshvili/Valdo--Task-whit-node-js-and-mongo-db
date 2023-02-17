import { Component } from '@angular/core';
import {Observable, tap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {QuizzService} from "../../services/quizz.service";
import {Quizz} from "../../interfaces/quizz";
import {ConfirmationDialogComponent} from "../../dialogs/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent {
  public quiz$!: Observable<Quizz>;
  private _quizId!: string;
  public answers: any[] = [];
  constructor(
    private _router: ActivatedRoute,
    private _quizService: QuizzService,
    private _matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._quizId = this._router.snapshot.params['id'];

    this.quiz$ = this._quizService.getQuiz(this._quizId).pipe(
      tap((data: Quizz) => {
        data.questions.forEach(() => this.answers.push(null));
        console.log(this.answers);
      })
    );
  }
  submit() {
    const dialog = this._matDialog.open(ConfirmationDialogComponent, {
      width: `440px`
    });

    dialog.afterClosed().subscribe(ok => ok ? this.sendAnswers() : null);

  }
  sendAnswers() {
    this._quizService.checkQuiz({quizId: this._quizId, answers: this.answers}).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }
  fillAnswers(parentIndex: number, childIndex: number) {
    this.answers[parentIndex] = childIndex;
    console.log(parentIndex, childIndex, this.answers);
  }
}
