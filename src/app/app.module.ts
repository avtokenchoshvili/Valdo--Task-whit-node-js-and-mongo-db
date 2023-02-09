import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/header/nav/nav.component';
import { CursesComponent } from './components/header/nav/curses/curses.component';
import { ResumeComponent } from './components/header/nav/resume/resume.component';

import { BlogComponent } from './components/header/nav/blog/blog.component';
import { SignInComponent } from './components/header/nav/sign-in/sign-in.component';
import { SignUpComponent } from './components/header/nav/sign-up/sign-up.component';

import { FooterComponent } from './components/footer/footer.component';
import {MainComponent} from "./components/main/main.component";
import { CardsComponent } from './components/main/cards/cards.component';
import {HttpClientModule ,HTTP_INTERCEPTORS} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TokenInterceptor} from "./interceptor/token.interceptor";
import { ProfileComponent } from './profile/profile.component';
import {MaterialModule} from "./modules/material/material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import { CategoriesDialogComponent } from './dialogs/categories-dialog/categories-dialog.component';
import { AdminPgComponent } from './admin/admin-pg/admin-pg.component';
import {AdminModule} from "./admin/admin-module/admin.module";
import { AdminPgNavComponent } from './admin/admin-pg-nav/admin-pg-nav.component';
import { TagsDialogComponent } from './dialogs/tags-dialog/tags-dialog.component';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CursesComponent,
    ResumeComponent,

    BlogComponent,
    SignInComponent,
    SignUpComponent,
    MainComponent,
    FooterComponent,
    CardsComponent,
    ProfileComponent,
    CategoriesDialogComponent,
    AdminPgComponent,
    AdminPgNavComponent,
    TagsDialogComponent,
    ConfirmationDialogComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    AdminModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
