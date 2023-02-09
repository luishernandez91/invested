import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreditsComponent} from './credits.component';
import {RouterModule} from "@angular/router";
import {ComponentsModule} from "@shared/components/components.module";
import {MaterialModule} from "@shared/modules/material/material.module";


@NgModule({
  declarations: [
    CreditsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: CreditsComponent}]),
    MaterialModule,
    ComponentsModule
  ]
})
export class CreditsModule {
}
