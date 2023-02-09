import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {MaterialModule} from "../modules/material/material.module";
import {RouterLink, RouterLinkActive} from "@angular/router";
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    NavbarComponent,
    TableComponent
  ],
    exports: [
        NavbarComponent,
        TableComponent
    ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterLinkActive,
    RouterLink
  ]
})
export class ComponentsModule { }
