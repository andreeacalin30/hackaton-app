import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.scss']
})
export class Question2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nextPage() {
    this.router.navigate(['question6']);
  }

  backPage() {
    this.router.navigate(['question5']);
  }

  value = '0';
  updateValue(value: string) { 
    this.value = value;
  }
  updateValueSlider(event) {
    this.value = event.value;
  }
}
