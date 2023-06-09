import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { HomeComponent } from "./home/home.component";
import { PasswordPatternDirective } from "./directives/password-pattern.directive";
import { MatchPasswordDirective } from "./directives/match-password.directive";
import { ValidateUserNameDirective } from "./directives/validate-user-name.directive";

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    HomeComponent,
    PasswordPatternDirective,
    MatchPasswordDirective,
    ValidateUserNameDirective,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: "", component: ReactiveFormComponent },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
