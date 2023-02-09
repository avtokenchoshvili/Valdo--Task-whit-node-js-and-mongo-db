import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {QuizzService} from "../../services/quizz.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Questions} from "../../interfaces/questions";
import {QuizzDialogsComponent} from "../../dialogs/quizz-dialogs/quizz-dialogs.component";

@Component({
  selector: 'app-QuizComponent',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  form!: FormGroup;
  questions: Questions[] = [];
  quizId!: string;
  constructor(
    private _fb: FormBuilder,
    private _matDialog: MatDialog,
    private _quizService: QuizzService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}



  ngOnInit(): void {
    this.quizId = this._route.snapshot.queryParams['id'];

    this.form = this._fb.group({
      title: [''],
      smallDescr: [''],
      descr: ['']
    });

    if (this.quizId) {
      this._quizService.getQuiz(this.quizId).subscribe(
        quiz => {
          this.form.patchValue(quiz);
          this.questions = quiz['questions'];
          console.log(this.questions);
        }
      )
    }

    //this.addAnswersDialog();
  }

  edit(data: any, i: number) {
    const dialog = this._matDialog.open(QuizzDialogsComponent, {
      width: `440px`,
      data: {
        edit: this.quizId,
        data: data,
        index: i
      }
    })

    dialog.afterClosed().subscribe(data => {
      if (data) {
        console.log(data);
        this.questions[data.index] = data;
        //this.data.questions.push(data);
      }
    });
  }

  addAnswersDialog() {
    const dialog = this._matDialog.open(QuizzDialogsComponent, {
      width: '440px'
    });

    dialog.afterClosed().subscribe(data => {
      if (data) {
        this.questions.push(data);
      }
    });
  }

  addQuiz() {
    if (this.quizId) {
      this._quizService.editQuiz(this.quizId, {
        questions: this.questions,
        ...this.form.value
      }).subscribe(
        () => {
          this._router.navigateByUrl(`quiz-detail/${this.quizId}`);
        },
        err => {
          console.log(err)
        }
      )
      return;
    }
    this._quizService.addQuiz(
      {
        questions: this.questions,
        ...this.form.value
      }
    ).subscribe(
      (res: any) => {
        this._router.navigateByUrl(`quiz-detail/${res['_id']}`);
      },
      err => {
        console.log(err)
      }
    );
  }


}
