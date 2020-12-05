import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data-service';

@Component({
  selector: 'app-find-brokers',
  templateUrl: './find-brokers.component.html',
  styleUrls: ['./find-brokers.component.scss']
})
export class FindBrokersComponent implements OnInit {

  public brokers: any[] = [{'id':1,'img':'../../../assets/Face1.png', 'left':100, 'top':70},
  {'id':2,'img':'../../../assets/Face2.png', 'left':230, 'top':-30},
  {'id':3,'img':'../../../assets/Face3.png','left':40, 'top':20},
  {'id':4,'img':'../../../assets/Face4.png','left':280, 'top':10},
  {'id':5,'img':'../../../assets/Face5.png','left':50, 'top':20},
  {'id':6,'img':'../../../assets/Face6.png', 'left':300, 'top':150},
  {'id':7,'img':'../../../assets/Face7.png', 'left':290, 'top':15},
  {'id':8,'img':'../../../assets/Face8.png', 'left':80, 'top':-280},
  {'id':9,'img':'../../../assets/Face9.png', 'left':150, 'top':10}];

  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
   
  }

  async openBrokerInfo(id: number){
    this.router.navigate(['broker-description/'], { queryParams: {id:id }});
  }

}
