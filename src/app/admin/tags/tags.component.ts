import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {TagsService} from "../../services/tags.service";
import {TagsDialogComponent} from "../../dialogs/tags-dialog/tags-dialog.component";
import {ConfirmationDialogComponent} from "../../dialogs/confirmation-dialog/confirmation-dialog.component";
import {Tags} from "../../interfaces/tags";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags$!: Observable<Tags[]>;
  constructor(
    private _tagsService: TagsService,
    private _matDialog: MatDialog
  ) {}


  ngOnInit(): void {
    this._getTags();
  }
  private _getTags() {
    this.tags$ = this._tagsService.getAllTag();
  }

  addTag(tag?: any) {
    const dialog = this._matDialog.open(TagsDialogComponent, {
      width: '440px',
      data: tag
    });

    dialog.afterClosed().subscribe(
      res => {
        if (res) {
          this._getTags();
        }
      }
    )
  }

  delete(tagId: string) {
    const dialog = this._matDialog.open(ConfirmationDialogComponent, {
      width: '440px'
    });

    dialog.afterClosed().subscribe(res => {
      if (res) {
        this._tagsService.deleteTag(tagId).subscribe(
          () => {
            this._getTags();
          },
          err => {
            console.log(err);
          }
        );
      }
      console.log(res);
    });
  }



}
