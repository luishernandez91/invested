import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from "@ngxs/store";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {CustomersState} from "@state/customer/customers.state";
import {CreditsState} from "@state/credits/credits.state";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([CustomersState, CreditsState], {}),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ]
})
export class StateModule {
}
