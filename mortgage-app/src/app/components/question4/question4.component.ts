import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.scss']
})
export class Question4Component implements OnInit {

  constructor(private router: Router) { }

  numberOfRooms = '';
  ngOnInit(): void {
  }

  nextPage() {
    this.router.navigate(['question5']);
  }

  backPage() {
    this.router.navigate(['question3']);
  }

  houseImage1 = '../../../assets/Icon-House.svg';
  getHouseImage1() { return this.houseImage1; }

  houseImage2 = '../../../assets/Icon-House.svg';
  getHouseImage2() { return this.houseImage2; }

  houseImage3 = '../../../assets/Icon-House.svg';
  getHouseImage3() { return this.houseImage3; }


  element1: HTMLElement;
  element2: HTMLElement;
  element3: HTMLElement;

  element11: HTMLElement;
  element22: HTMLElement;
  element33: HTMLElement;


  public checkBox(type: string) {
    this.element1 = document.getElementById('op1') as HTMLElement;
    this.element2 = document.getElementById('op2') as HTMLElement;
    this.element3 = document.getElementById('op3') as HTMLElement;

    this.element11 = document.getElementById('op11') as HTMLElement;
    this.element22 = document.getElementById('op22') as HTMLElement;
    this.element33 = document.getElementById('op33') as HTMLElement;

    if (type == "new") {
      this.houseImage1 = '../../../assets/Icon-House-white.svg';
      this.houseImage2 = '../../../assets/Icon-House.svg';
      this.houseImage3 = '../../../assets/Icon-House.svg';
      this.element1.style.backgroundColor = '#84ADAE';
      this.element2.style.backgroundColor = '#ffffff';
      this.element3.style.backgroundColor = '#ffffff';
      this.element11.style.color = '#ffffff';
      this.element22.style.color = '#595959';
      this.element33.style.color = '#595959';


    } else if (type == "resale") {
      this.houseImage1 = '../../../assets/Icon-House.svg';
      this.houseImage2 = '../../../assets/Icon-House-white.svg';
      this.houseImage3 = '../../../assets/Icon-House.svg';
      this.element1.style.backgroundColor = '#ffffff';
      this.element2.style.backgroundColor = '#84ADAE';
      this.element3.style.backgroundColor = '#ffffff';
      this.element11.style.color = '#595959';
      this.element22.style.color = '#ffffff';
      this.element33.style.color = '#595959';

    } else if (type == "both") {
      this.houseImage1 = '../../../assets/Icon-House.svg';
      this.houseImage2 = '../../../assets/Icon-House.svg';
      this.houseImage3 = '../../../assets/Icon-House-white.svg';
      this.element1.style.backgroundColor = '#ffffff';
      this.element2.style.backgroundColor = '#ffffff';
      this.element3.style.backgroundColor = '#84ADAE';
      this.element11.style.color = '#595959';
      this.element22.style.color = '#595959';
      this.element33.style.color = '#ffffff';

    }
  }
}
