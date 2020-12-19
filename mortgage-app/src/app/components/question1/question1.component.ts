import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.scss']
})
export class Question1Component implements OnInit {

  constructor(private router: Router) { }

  element1: HTMLElement;
  element2: HTMLElement;
  element3: HTMLElement;
  element4: HTMLElement;

  nextPage() {
    this.router.navigate(['question3']);
  }

  ngOnInit(): void {
    this.houseImage = '../../../assets/Icon-House.svg';
    this.condoImage = '../../../assets/icon-Condo.svg';
  }

  houseImage = '../../../assets/Icon-House.svg';
  condoImage = '../../../assets/icon-Condo.svg';

  public checkBox(type: string) {
    this.element1 = document.getElementById('op1') as HTMLElement;
    this.element2 = document.getElementById('op2') as HTMLElement;

    this.element3 = document.getElementById('op11') as HTMLElement;
    this.element4 = document.getElementById('op22') as HTMLElement;

    if (type == "house") {
      this.houseImage = '../../../assets/Icon-House-white.svg';
      this.condoImage = '../../../assets/icon-Condo.svg';
      this.element1.style.backgroundColor = '#84ADAE';
      this.element2.style.backgroundColor = '#ffffff';
      this.element3.style.color = '#ffffff';
      this.element4.style.color = '#595959';

    } else if (type == "condo") {
      this.houseImage = '../../../assets/Icon-House.svg';
      this.condoImage = '../../../assets/icon-Condo-white.svg';
      this.element1.style.backgroundColor = '#ffffff';
      this.element2.style.backgroundColor = '#84ADAE';
      this.element3.style.color = '#595959';
      this.element4.style.color = '#ffffff';
    }
  }

  getHouseImage() { return this.houseImage; }

  getCondoImage() { return this.condoImage; }

}
