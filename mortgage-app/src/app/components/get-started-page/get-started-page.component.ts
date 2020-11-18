import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-started-page',
  templateUrl: './get-started-page.component.html',
  styleUrls: ['./get-started-page.component.scss']
})
export class GetStartedPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToQuestions(){
    this.router.navigate(['/question1']);
  }

  goBackToLogin(){
    this.router.navigate(['/login-page']);
  }

}
