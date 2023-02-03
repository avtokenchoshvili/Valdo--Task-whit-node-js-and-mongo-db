import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginService} from "../../../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  form!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _loginService: LoginService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      email: [`valeri.kharitonashvili1@gmail.com`],
      password: [`123123123`]
    })
  }

  login() {
    this._loginService.login(this.form.value).subscribe(
      res => {
        localStorage.setItem('user', JSON.stringify(res));
        this._router.navigateByUrl('/profile')
      },
      err => {
        console.log(err)
      }
    )
  }
}
