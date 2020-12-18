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
  getHouseImage1() { console.log(this.houseImage1); return this.houseImage1; }

  houseImage2 = '../../../assets/Icon-resale-home.svg';
  getHouseImage2() { console.log(this.houseImage2); return this.houseImage2; }

  houseImage3 = '../../../assets/Icon-House.svg';
  getHouseImage3() { console.log(this.houseImage3); return this.houseImage3; }

  houseImage4 = '../../../assets/Icon-resale-home.svg';
  getHouseImage4() { console.log(this.houseImage4); return this.houseImage4; }



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
      this.houseImage2 = '../../../assets/Icon-resale-home.svg';
      this.houseImage3 = '../../../assets/Icon-House.svg';
      this.houseImage4 = '../../../assets/Icon-resale-home.svg';
      this.element1.style.backgroundColor = '#84ADAE';
      this.element2.style.backgroundColor = '#ffffff';
      this.element3.style.backgroundColor = '#ffffff';
      this.element11.style.color = '#ffffff';
      this.element22.style.color = '#595959';
      this.element33.style.color = '#595959';


    } else if (type == "resale") {
      this.houseImage1 = '../../../assets/Icon-House.svg';
      this.houseImage2 = '../../../assets/Icon-resale-home-white.svg';
      this.houseImage3 = '../../../assets/Icon-House.svg';
      this.houseImage4 = '../../../assets/Icon-resale-home.svg';
      this.element1.style.backgroundColor = '#ffffff';
      this.element2.style.backgroundColor = '#84ADAE';
      this.element3.style.backgroundColor = '#ffffff';
      this.element11.style.color = '#595959';
      this.element22.style.color = '#ffffff';
      this.element33.style.color = '#595959';

    } else if (type == "both") {
      this.houseImage1 = '../../../assets/Icon-House.svg';
      this.houseImage2 = '../../../assets/Icon-resale-home.svg';
      this.houseImage3 = '../../../assets/Icon-House-white.svg';
      this.houseImage4 = '../../../assets/Icon-resale-home-white.svg';
      this.element1.style.backgroundColor = '#ffffff';
      this.element2.style.backgroundColor = '#ffffff';
      this.element3.style.backgroundColor = '#84ADAE';
      this.element11.style.color = '#595959';
      this.element22.style.color = '#595959';
      this.element33.style.color = '#ffffff';

    }
    console.log(type);
  }

  // public checkBox(type: string) {
  //   this.element1 = document.getElementById('room1') as HTMLElement;
  //   this.element2 = document.getElementById('room2') as HTMLElement;
  //   this.element3 = document.getElementById('room3') as HTMLElement;
  //   this.element4 = document.getElementById('rooms') as HTMLElement;
  //   if (type == "1") {
  //     this.numberOfRooms = '1';
  //     this.element1.style.color = '#ffffff';
  //     this.element1.style.backgroundColor = '#84ADAE';

  //     this.element2.style.color = '#84ADAE';
  //     this.element2.style.backgroundColor = '#ffffff';

  //     this.element3.style.color = '#84ADAE';
  //     this.element3.style.backgroundColor = '#ffffff';

  //     this.element4.style.color = '#84ADAE';
  //     this.element4.style.backgroundColor = '#ffffff';
  //   } else  if (type == "2") {
  //     this.numberOfRooms = '2';
  //     this.element1.style.color = '#84ADAE';
  //     this.element1.style.backgroundColor = '#ffffff';

  //     this.element2.style.color = '#ffffff';
  //     this.element2.style.backgroundColor = '#84ADAE';

  //     this.element3.style.color = '#84ADAE';
  //     this.element3.style.backgroundColor = '#ffffff';

  //     this.element4.style.color = '#84ADAE';
  //     this.element4.style.backgroundColor = '#ffffff';
  //   } else  if (type == "3") {
  //     this.numberOfRooms = '3';
  //     this.element1.style.color = '#84ADAE';
  //     this.element1.style.backgroundColor = '#ffffff';

  //     this.element2.style.color = '#84ADAE';
  //     this.element2.style.backgroundColor = '#ffffff';

  //     this.element3.style.color = '#ffffff';
  //     this.element3.style.backgroundColor = '#84ADAE';

  //     this.element4.style.color = '#84ADAE';
  //     this.element4.style.backgroundColor = '#ffffff';
  //   } else  if (type == "more") {
  //     this.numberOfRooms = 'more';
  //     this.element1.style.color = '#84ADAE';
  //     this.element1.style.backgroundColor = '#ffffff';

  //     this.element2.style.color = '#84ADAE';
  //     this.element2.style.backgroundColor = '#ffffff';

  //     this.element3.style.color = '#84ADAE';
  //     this.element3.style.backgroundColor = '#ffffff';

  //     this.element4.style.color = '#ffffff';
  //     this.element4.style.backgroundColor = '#84ADAE';
  //   }
  //   console.log(type);
  // }

}
