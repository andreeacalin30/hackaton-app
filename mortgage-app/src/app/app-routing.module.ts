import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrokerDescriptionComponent } from './components/broker-description/broker-description.component';
import { ContactBrokerComponent } from './components/contact-broker/contact-broker.component';
import { FindBrokersComponent } from './components/find-brokers/find-brokers.component';
import { FindLawyersComponent } from './components/find-lawyers/find-lawyers.component';
import { GetStartedPageComponent } from './components/get-started-page/get-started-page.component';
import { MapPageMockComponent } from './components/map-page-mock/map-page-mock.component';
import { MapPageComponent } from './components/map-page/map-page.component';
import { LoginComponent } from './components/login/login.component';
import { MortgageResultsComponent } from './components/mortgage-results/mortgage-results.component';
import { PreQ1Component } from './components/pre-approval/pre-q1/pre-q1.component';
import { PreQ2Component } from './components/pre-approval/pre-q2/pre-q2.component';
import { PreQ3Component } from './components/pre-approval/pre-q3/pre-q3.component';
import { PreQ4Component } from './components/pre-approval/pre-q4/pre-q4.component';
import { PreQ5Component } from './components/pre-approval/pre-q5/pre-q5.component';
import { PreQ6Component } from './components/pre-approval/pre-q6/pre-q6.component';
import { PreQ7Component } from './components/pre-approval/pre-q7/pre-q7.component';
import { Question1Component } from './components/question1/question1.component';
import { Question2Component } from './components/question2/question2.component';
import { Question3Component } from './components/question3/question3.component';
import { Question4Component } from './components/question4/question4.component';
import { Question5Component } from './components/question5/question5.component';
import { Question6Component } from './components/question6/question6.component';
import { Question7Component } from './components/question7/question7.component';

const routes: Routes = [
   { path: 'welcome-page', component: GetStartedPageComponent },
   { path: 'mortgage-results', component: MortgageResultsComponent },
   { path: 'login-page', component: LoginComponent },
   { path: 'question1', component: Question1Component },
   { path: 'question2', component: Question2Component },
   { path: 'question3', component: Question3Component },
   { path: 'question4', component: Question4Component },
   { path: 'question5', component: Question5Component },
   { path: 'question6', component: Question6Component },
   { path: 'question7', component: Question7Component },
   { path: 'map-page', component: MapPageComponent },
   { path: 'map-page-mock', component: MapPageMockComponent }
   { path: 'find-brokers', component: FindBrokersComponent },
   { path: 'pre-q1', component: PreQ1Component },
   { path: 'pre-q2', component: PreQ2Component },
   { path: 'pre-q3', component: PreQ3Component },
   { path: 'pre-q4', component: PreQ4Component },
   { path: 'pre-q5', component: PreQ5Component },
   { path: 'pre-q6', component: PreQ6Component },
   { path: 'pre-q7', component: PreQ7Component },
   { path: 'broker-description', component: BrokerDescriptionComponent},
   { path: 'contact-broker', component: ContactBrokerComponent},
   { path: 'find-lawyers', component: FindLawyersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
