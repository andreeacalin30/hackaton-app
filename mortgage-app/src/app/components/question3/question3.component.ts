import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.scss']
})
export class Question3Component implements OnInit {

  constructor(private router: Router) { }

  numberOfRooms = '';
  ngOnInit(): void {
  }

  nextPage() {
    this.router.navigate(['question4']);
  }

  backPage() {
    this.router.navigate(['question1']);
  }

  element1: HTMLElement;
  element2: HTMLElement;
  element3: HTMLElement;
  element4: HTMLElement;

  element5: HTMLElement;
  element6: HTMLElement;
  element7: HTMLElement;
  element8: HTMLElement;

  public checkBox1(type: string) {
    this.element1 = document.getElementById('room11') as HTMLElement;
    this.element2 = document.getElementById('room12') as HTMLElement;
    this.element3 = document.getElementById('room13') as HTMLElement;
    this.element4 = document.getElementById('rooms1') as HTMLElement;
    if (type == "1") {
      this.numberOfRooms = '1';
      this.element1.style.color = '#ffffff';
      this.element1.style.backgroundColor = '#84ADAE';

      this.element2.style.color = '#84ADAE';
      this.element2.style.backgroundColor = '#ffffff';

      this.element3.style.color = '#84ADAE';
      this.element3.style.backgroundColor = '#ffffff';

      this.element4.style.color = '#84ADAE';
      this.element4.style.backgroundColor = '#ffffff';
    } else  if (type == "2") {
      this.numberOfRooms = '2';
      this.element1.style.color = '#84ADAE';
      this.element1.style.backgroundColor = '#ffffff';

      this.element2.style.color = '#ffffff';
      this.element2.style.backgroundColor = '#84ADAE';

      this.element3.style.color = '#84ADAE';
      this.element3.style.backgroundColor = '#ffffff';

      this.element4.style.color = '#84ADAE';
      this.element4.style.backgroundColor = '#ffffff';
    } else  if (type == "3") {
      this.numberOfRooms = '3';
      this.element1.style.color = '#84ADAE';
      this.element1.style.backgroundColor = '#ffffff';

      this.element2.style.color = '#84ADAE';
      this.element2.style.backgroundColor = '#ffffff';

      this.element3.style.color = '#ffffff';
      this.element3.style.backgroundColor = '#84ADAE';

      this.element4.style.color = '#84ADAE';
      this.element4.style.backgroundColor = '#ffffff';
    } else  if (type == "more") {
      this.numberOfRooms = 'more';
      this.element1.style.color = '#84ADAE';
      this.element1.style.backgroundColor = '#ffffff';

      this.element2.style.color = '#84ADAE';
      this.element2.style.backgroundColor = '#ffffff';

      this.element3.style.color = '#84ADAE';
      this.element3.style.backgroundColor = '#ffffff';

      this.element4.style.color = '#ffffff';
      this.element4.style.backgroundColor = '#84ADAE';
    }
  }

  public checkBox2(type: string) {
    this.element5 = document.getElementById('room21') as HTMLElement;
    this.element6 = document.getElementById('room22') as HTMLElement;
    this.element7 = document.getElementById('room23') as HTMLElement;
    this.element8 = document.getElementById('rooms2') as HTMLElement;
    if (type == "1") {
      this.numberOfRooms = '1';
      this.element5.style.color = '#ffffff';
      this.element5.style.backgroundColor = '#84ADAE';

      this.element6.style.color = '#84ADAE';
      this.element6.style.backgroundColor = '#ffffff';

      this.element7.style.color = '#84ADAE';
      this.element7.style.backgroundColor = '#ffffff';

      this.element8.style.color = '#84ADAE';
      this.element8.style.backgroundColor = '#ffffff';
    } else  if (type == "2") {
      this.numberOfRooms = '2';
      this.element5.style.color = '#84ADAE';
      this.element5.style.backgroundColor = '#ffffff';

      this.element6.style.color = '#ffffff';
      this.element6.style.backgroundColor = '#84ADAE';

      this.element7.style.color = '#84ADAE';
      this.element7.style.backgroundColor = '#ffffff';

      this.element8.style.color = '#84ADAE';
      this.element8.style.backgroundColor = '#ffffff';
    } else  if (type == "3") {
      this.numberOfRooms = '3';
      this.element5.style.color = '#84ADAE';
      this.element5.style.backgroundColor = '#ffffff';

      this.element6.style.color = '#84ADAE';
      this.element6.style.backgroundColor = '#ffffff';

      this.element7.style.color = '#ffffff';
      this.element7.style.backgroundColor = '#84ADAE';

      this.element8.style.color = '#84ADAE';
      this.element8.style.backgroundColor = '#ffffff';
    } else  if (type == "more") {
      this.numberOfRooms = 'more';
      this.element5.style.color = '#84ADAE';
      this.element5.style.backgroundColor = '#ffffff';

      this.element6.style.color = '#84ADAE';
      this.element6.style.backgroundColor = '#ffffff';

      this.element7.style.color = '#84ADAE';
      this.element7.style.backgroundColor = '#ffffff';

      this.element8.style.color = '#ffffff';
      this.element8.style.backgroundColor = '#84ADAE';
    }
  }
}
