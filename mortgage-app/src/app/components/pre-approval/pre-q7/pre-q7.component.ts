import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-q7',
  templateUrl: './pre-q7.component.html',
  styleUrls: ['./pre-q7.component.scss']
})
export class PreQ7Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nextPage() {
    this.router.navigate(['']);
  }

  backPage() {
    this.router.navigate(['pre-q6']);
  }

}
