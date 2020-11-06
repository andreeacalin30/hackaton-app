import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.scss']
})
export class Question5Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  nextPage() {
    this.router.navigate(['question2']);
  }

  backPage() {
    this.router.navigate(['question4']);
  }

  element1: HTMLElement;
  element2: HTMLElement;
  element3: HTMLElement;
  element4: HTMLElement;
  element5: HTMLElement;

  unblockInput(number) {
    this.element1 = document.getElementById('input1') as HTMLElement;
    this.element2 = document.getElementById('input2') as HTMLElement;
    this.element3 = document.getElementById('input3') as HTMLElement;
    this.element4 = document.getElementById('input4') as HTMLElement;
    this.element5 = document.getElementById('input5') as HTMLElement;

    if (number=='1') {
      this.element2.style.display = "flex";
    }

    if (number=='2') {
      this.element3.style.display = "flex";
    }

    if (number=='3') {
      this.element4.style.display = "flex";
    }

    if (number=='4') {
      this.element5.style.display = "flex";
    }
  }

}
