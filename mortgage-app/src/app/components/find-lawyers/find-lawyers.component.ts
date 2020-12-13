import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data-service';

@Component({
  selector: 'app-find-lawyers',
  templateUrl: './find-lawyers.component.html',
  styleUrls: ['./find-lawyers.component.scss']
})
export class FindLawyersComponent implements OnInit {
  public lawyers: any[] = [ {'id':6,'img':'../../../assets/Face6.png', 'left':300, 'top':150},
  {'id':7,'img':'../../../assets/Face7.png', 'left':290, 'top':15},
  {'id':8,'img':'../../../assets/Face8.png', 'left':80, 'top':-280}];

  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
   
  }

}
