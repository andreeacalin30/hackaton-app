import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-q1',
  templateUrl: './pre-q1.component.html',
  styleUrls: ['./pre-q1.component.scss']
})
export class PreQ1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nextPage() {
    this.router.navigate(['pre-q6']);
  }

  backPage() {
    this.router.navigate(['find-brokers']);
  }

  value = '0';
  updateValue(value: string) { 
    this.value = value;
  }
  updateValueSlider(event) {
    this.value = event.value;
  }

}
