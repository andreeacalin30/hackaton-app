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

  public brokers: any[] = [{'id':1,'img':'../../../assets/Face1.png', 'left':100, 'top':80},
  {'id':2,'img':'../../../assets/Face2.png', 'left':230, 'top':-10},
  {'id':3,'img':'../../../assets/Face3.png','left':40, 'top':20},
  {'id':4,'img':'../../../assets/Face4.png','left':260, 'top':120}];

  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
   
  }

  async openBrokerInfo(id: number){
    this.router.navigate(['broker-description/'], { queryParams: {id:id }});
  }

}
