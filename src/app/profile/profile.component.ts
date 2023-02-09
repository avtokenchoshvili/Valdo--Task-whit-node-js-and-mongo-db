import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {ProfileService} from "../services/profile.service";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  data$!: Observable<any>;
  constructor(
    public loginService: LoginService,
    private _profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.data$ = this._profileService.getProfile();
  }

}
