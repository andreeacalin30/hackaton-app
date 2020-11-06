import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question7',
  templateUrl: './question7.component.html',
  styleUrls: ['./question7.component.scss']
})
export class Question7Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}
    nextPage() {
      this.router.navigate(['question7']);
    }
  
    backPage() {
      this.router.navigate(['question6']);
    }
  

}
