import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreditsComponent} from './credits.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    CreditsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: CreditsComponent}])
  ]
})
export class CreditsModule {
}
