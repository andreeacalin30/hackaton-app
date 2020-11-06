import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetStartedPageComponent } from './components/get-started-page/get-started-page.component';
import { Question1Component } from './components/question1/question1.component';
import { Question2Component } from './components/question2/question2.component';
import { MatSliderModule } from '@angular/material/slider';
import { Question3Component } from './components/question3/question3.component';
import { Question4Component } from './components/question4/question4.component';
import { Question5Component } from './components/question5/question5.component';
import { Question6Component } from './components/question6/question6.component';
import { Question7Component } from './components/question7/question7.component';

@NgModule({
  declarations: [
    AppComponent,
    GetStartedPageComponent,
    Question1Component,
    Question2Component,
    Question3Component,
    Question4Component,
    Question5Component,
    Question6Component,
    Question7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule
  ],
  providers: [],
  exports: [AppRoutingModule,MatSliderModule],
  bootstrap: [AppComponent]
})
export class AppModule { }