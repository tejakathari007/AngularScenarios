import { Child1Component } from './scenario1/child1/child1.component';
import { Scenario1Module } from './scenario1/scenario1.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Scenario1Module

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
