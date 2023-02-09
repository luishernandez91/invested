import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {ComponentsModule} from "@shared/components/components.module";


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
        path: 'payments',
        loadChildren: () => import('@modules/payments/payments.module').then(m => m.PaymentsModule),
      },
    ]
  }
]


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
  ]
})
export class DashboardModule {
}
