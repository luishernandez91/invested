// Core modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// App modules
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from "@shared/modules/material/material.module";
import {ComponentsModule} from "@shared/components/components.module";
import {StateModule} from "@state/state.module";
// Components
import {AppComponent} from './app.component';
// Services
import {BearerService} from "./interceptors/bearer.service";
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule,
    StateModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BearerService,
      multi: true
    },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
