import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-info-point',
  templateUrl: './info-point.component.html',
  styleUrls: ['./info-point.component.scss']
})
export class InfoPointComponent implements OnInit {
  imageObject: any[];
  @ViewChild('videoPanel', { read: ElementRef }) public panel: ElementRef<any>;
  constructor() { 

  }

  ngOnInit(): void {
  }

 
}
