import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreditsComponent} from './credits.component';
import {RouterModule} from "@angular/router";
import {ComponentsModule} from "@shared/components/components.module";
import {MaterialModule} from "@shared/modules/material/material.module";
import { CreditsFormComponent } from './credits-form/credits-form.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CreditsComponent,
    CreditsFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: CreditsComponent}]),
    MaterialModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class CreditsModule {
}
