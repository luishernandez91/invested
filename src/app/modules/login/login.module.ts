import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "@shared/modules/material/material.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: LoginComponent}]),
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
