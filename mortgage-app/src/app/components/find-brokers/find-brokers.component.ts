import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-brokers',
  templateUrl: './find-brokers.component.html',
  styleUrls: ['./find-brokers.component.scss']
})
export class FindBrokersComponent implements OnInit {

  public brokers: any[] = [{'img':'../../../assets/Face1.png', 'left':100, 'top':70},
  {'img':'../../../assets/Face2.png', 'left':230, 'top':-30},
  {'img':'../../../assets/Face3.png','left':40, 'top':20},
  {'img':'../../../assets/Face4.png','left':280, 'top':10},
  {'img':'../../../assets/Face5.png','left':50, 'top':20},
  {'img':'../../../assets/Face6.png', 'left':300, 'top':150},
  {'img':'../../../assets/Face7.png', 'left':290, 'top':15},
  {'img':'../../../assets/Face8.png', 'left':80, 'top':-280},
  {'img':'../../../assets/Face9.png', 'left':150, 'top':10}];

  constructor() { }

  ngOnInit(): void {
  }

}
