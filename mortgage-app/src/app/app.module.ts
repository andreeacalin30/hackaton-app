import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import {MatFormFieldModule} from '@angular/material/form-field'
import { HttpClientModule } from '@angular/common/http';
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
import { MapPageComponent } from './components/map-page/map-page.component';
import { MapPageMockComponent } from './components/map-page-mock/map-page-mock.component';
<<<<<<< HEAD
import { ChartsModule } from 'ng2-charts';
=======
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MortgageResultsComponent } from './components/mortgage-results/mortgage-results.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { FindBrokersComponent } from './components/find-brokers/find-brokers.component';
import { PreQ1Component } from './components/pre-approval/pre-q1/pre-q1.component';
import { PreQ6Component } from './components/pre-approval/pre-q6/pre-q6.component';
import { PreQ7Component } from './components/pre-approval/pre-q7/pre-q7.component';
import { PreQ2Component } from './components/pre-approval/pre-q2/pre-q2.component';
import { PreQ3Component } from './components/pre-approval/pre-q3/pre-q3.component';
import { PreQ4Component } from './components/pre-approval/pre-q4/pre-q4.component';
import { PreQ5Component } from './components/pre-approval/pre-q5/pre-q5.component';
import { BrokerDescriptionComponent } from './components/broker-description/broker-description.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignaturePadModule } from 'angular2-signaturepad';
import { ContactBrokerComponent } from './components/contact-broker/contact-broker.component';
import { FindLawyersComponent } from './components/find-lawyers/find-lawyers.component';
>>>>>>> 295162f09c36c9098a14632e317f69a44948af9e

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
    Question7Component,
    MapPageComponent,
    MapPageMockComponent
    LoginComponent,
    MortgageResultsComponent,
    ChatbotComponent,
    FindBrokersComponent,
    PreQ1Component,
    PreQ6Component,
    PreQ7Component,
    PreQ2Component,
    PreQ3Component,
    PreQ4Component,
    PreQ5Component,
    BrokerDescriptionComponent,
    ContactBrokerComponent,
    FindLawyersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
<<<<<<< HEAD
    ChartsModule
=======
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    SignaturePadModule
>>>>>>> 295162f09c36c9098a14632e317f69a44948af9e
  ],
  providers: [],
  exports: [AppRoutingModule,MatSliderModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
