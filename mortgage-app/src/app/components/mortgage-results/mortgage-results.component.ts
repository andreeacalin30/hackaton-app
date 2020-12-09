import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mortgage-results',
  templateUrl: './mortgage-results.component.html',
  styleUrls: ['./mortgage-results.component.scss']
})
export class MortgageResultsComponent implements OnInit {
  public homePrice = 123456;
  public mortgagePrice = 2500;
  public housingPrice = 875;
  public remainingCash = 330;
  public mortgageLoan=590007;
  public yearsRates=3;
  public fixedRate=2.14;
  public totalYears=25;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public getHomePrice(){
    var resultValue= this.formatPrice(this.homePrice);
    return resultValue;
  }

  public getMortgagePrice(){
    var resultValue= this.formatPrice(this.mortgagePrice);
    return resultValue;
  }

  public getHousingPrice(){
    var resultValue= this.formatPrice(this.housingPrice);
    return resultValue;
  }

  public getRemainingCash(){
    var resultValue= this.formatPrice(this.remainingCash);
    return resultValue;
  }

  public getMortgageLoan(){
    var resultValue= this.formatPrice(this.mortgageLoan);
    return resultValue;
  }

  public getFixedRate(){
    var resultValue= this.formatPercent(this.fixedRate);
    return resultValue;
  }

  public formatPrice(price: number){
    return price.toLocaleString("en-US", 
    {style:"currency", currency: "USD",minimumFractionDigits: 0,maximumFractionDigits: 0});
  }
  public formatPercent(value: number){
    return value+"%";
  }

  backPage(){
    this.router.navigate(['question7']);
  }

}
