import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "@shared/modules/material/material.module";
import {ComponentsModule} from "@shared/components/components.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: HomeComponent}]),
    MaterialModule,
    ComponentsModule
  ]
})
export class HomeModule {
}
