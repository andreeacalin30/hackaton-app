import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-q6',
  templateUrl: './pre-q6.component.html',
  styleUrls: ['./pre-q6.component.scss']
})
export class PreQ6Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nextPage() {
    this.router.navigate(['pre-q7']);
  }

  backPage() {
    this.router.navigate(['pre-q1']);
  }

}
