import {Component, Inject} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-quizz-dialogs',
  templateUrl: './quizz-dialogs.component.html',
  styleUrls: ['./quizz-dialogs.component.css']
})
export class QuizzDialogsComponent {
  form!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _matDialogRef: MatDialogRef<QuizzDialogsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      question: [''],
      answers: this._fb.array([])
    });

    if (this.data) {
      console.log(this.data);
      this.form.patchValue(this.data.data);

      this.data.data.answers.forEach((el: any) => {
        this.addAnswer(el);
      });
    }
  }

  get answers(): FormArray {
    return this.form.controls['answers'] as FormArray;
  }

  addAnswer(data?: any) {
    const group = this._fb.group({
      answer: [data ? data.answer : ''],
      isCorrect: [data ? data.isCorrect : false]
    });

    this.answers.push(group);
  }

  delete(i: number) {
    this.answers.removeAt(i);
  }

  add() {
    this.data ? this._matDialogRef.close({ ...this.form.value, index: this.data.index }) : this._matDialogRef.close(this.form.value);
  }

  isCorrect(i: number) {
    this.answers.controls.forEach((el, index) => {
      const group = el as FormGroup;
      group.controls['isCorrect'].patchValue(i == index ? true :  false);
    });
  }


}
