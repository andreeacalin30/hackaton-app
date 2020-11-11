import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mortgage-results',
  templateUrl: './mortgage-results.component.html',
  styleUrls: ['./mortgage-results.component.scss']
})
export class MortgageResultsComponent implements OnInit {
  public homePrice = 123456;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public getHomePrice(){
    var resultValue=this.homePrice.toLocaleString("en-US", 
    {style:"currency", currency: "USD",minimumFractionDigits: 0,maximumFractionDigits: 0});
    return resultValue;
  }

  backPage(){
    this.router.navigate(['question7']);
  }

}
