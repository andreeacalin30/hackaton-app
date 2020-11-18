import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindBrokersComponent } from './components/find-brokers/find-brokers.component';
import { GetStartedPageComponent } from './components/get-started-page/get-started-page.component';
import { LoginComponent } from './components/login/login.component';
import { MortgageResultsComponent } from './components/mortgage-results/mortgage-results.component';
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
   { path: 'find-brokers', component: FindBrokersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
