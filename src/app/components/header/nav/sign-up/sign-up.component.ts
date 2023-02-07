import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {RegistrationService} from "../../../../services/registration.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  animations: [
    trigger('submitButton', [
      state('default', style({
        transform: 'scale(1)'
      })),
      state('clicked', style({
        transform: 'scale(1.5)'
      })),
      transition('default => clicked', [
        animate('200ms ease-in-out')
      ]),
      transition('clicked => default', [
        animate('200ms ease-in-out')
      ])
    ])
  ],
  styleUrls: ['./sign-up.component.css'],

})
export class SignUpComponent {
  registrationForm!: FormGroup;
  submitButtonAnimation: any;

  constructor(private fb: FormBuilder,private _registrationService:RegistrationService,private router: Router
              ) {}


  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  onSubmit() {

  this._registrationService.registerUser(this.registrationForm.value).subscribe(res=>{
    console.log(res);
    this.router.navigate(['/home']);
  },err=>{
 alert(JSON.stringify(err.error))
    console.log(err)
  })
  }
}
