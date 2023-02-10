import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {ComponentsModule} from "@shared/components/components.module";
import {CustomerFormComponent} from './customer-form/customer-form.component';
import {MaterialModule} from "@shared/modules/material/material.module";
import {ReactiveFormsModule} from "@angular/forms";


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'credits',
        loadChildren: () => import('@modules/credits/credits.module').then(m => m.CreditsModule),
      },
      {
        path: 'credits/customer/:customer',
        loadChildren: () => import('@modules/credits/credits.module').then(m => m.CreditsModule),
      }
    ]
  }
]


@NgModule({
  declarations: [
    DashboardComponent,
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule {
}
