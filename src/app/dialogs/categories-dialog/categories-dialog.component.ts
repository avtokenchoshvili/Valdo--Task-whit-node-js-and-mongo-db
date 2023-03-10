import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CategoriesService} from "../../services/categories.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-categories-dialog',
  templateUrl: './categories-dialog.component.html',
  styleUrls: ['./categories-dialog.component.css']
})
export class CategoriesDialogComponent {
  public form!: FormGroup;
  public image!: File;
  constructor(
    private _fb: FormBuilder,
    private _categoriesService: CategoriesService,
    private dialogRef: MatDialogRef<CategoriesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {

    this.form = this._fb.group({
      title: [''],
      descr: [''],
      metaKeyword: [''],
      metaDescr: [''],
      metaAuthor: [''],
      img: [''],
      isFavorite: [false]
    });
    if (this.data) this.form.patchValue(this.data);

  }
  selectImage(event: any) {
    this.image = event.target.files[0];
    console.log(event.target.files[0]);
  }


  submit() {
    this.dialogRef.close();
    /* თუ მონაცემები მშობელი კომპონენტიდან არ არსებობს მაგ შემთვევაში ვიძახებთ დამატების სერვისს */
    if (!this.data) {
      this._categoriesService.upload(this.image).pipe(
        switchMap((res: any) => {
          this.form.controls['img'].setValue(res['path']);
          return this._categoriesService.addCategory(this.form.value)
        })
      ).subscribe(
        res => {
          console.log(res );
          alert(JSON.stringify(res));
        }
      );
      return;
    }
    /* თუ მომხმარებელმა აირჩია ახალი ფოტო მაგ შემთხვევაში ვიძახებთ ფოტოს ატვირთვის სერვისს და შემდეგ ვიძახებთ კატეგორიის რედაქტირების სერვისს */
    if (this.image) {
      this._categoriesService.upload(this.image).pipe(
        switchMap((res: any) => {
          this.form.controls['img'].setValue(res['path']);
          return this._categoriesService.editCategory(
            {
              id: this.data._id,
              ...this.form.value
            }
          )
        })
      ).subscribe(
        res => {
          console.log(res);
        }
      );
      return;
    }
    /* თუ მომხმარებელი მხოლოდ ცვლის ინფუთ კონტორლებს და არ ცვლის სურათს */
    this._categoriesService.editCategory(
      {
        id: this.data._id,
        ...this.form.value
      }
    ).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );

  }
}
