import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from "@ngxs/store";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {CustomersState} from "@state/customer/customers.state";
import {CreditsState} from "@state/credits/credits.state";
import {PaymentsState} from "@state/payments/payments.state";
import {NgxsStoragePluginModule} from "@ngxs/storage-plugin";
import {AuthState} from "@state/auth/auth.state";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([
      CustomersState,
      CreditsState,
      PaymentsState,
      AuthState], {}
    ),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      key: ['auth.token', 'auth.user']
    })
  ]
})
export class StateModule {
}
