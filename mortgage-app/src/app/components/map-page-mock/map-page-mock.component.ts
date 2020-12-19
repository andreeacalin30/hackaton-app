import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-map-page-mock',
  templateUrl: './map-page-mock.component.html',
  styleUrls: ['./map-page-mock.component.scss']
})
export class MapPageMockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openHouse() {
    document.getElementById("bakgroundOpac").style.display = "flex";
    document.getElementById("house").style.display = "block";
    console.log("HOUSE OPENED")
  }

  closeHouse() {
    document.getElementById("bakgroundOpac").style.display = "none";
    document.getElementById("house").style.display = "none";
  }

  openDetails() {
    document.getElementById("details").style.display = "block";
  }

  closeDetails() {
    document.getElementById("details").style.display = "none";
    document.getElementById("house").style.display = "none";
    document.getElementById("bakgroundOpac").style.display = "none";
  }

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
          gridLines: {
              display: false
          }
      }],
      yAxes: [{
        display: false,
          gridLines: {
              display: false
          },
          ticks: {
            beginAtZero: true
        }   
      }]
  }
  };
  barChartLabels: Label[] = ['0', '5', '10', '15', '20', '25'];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [60, 50, 40, 30, 20, 10], label: 'Interest' }
  ];

  openMenu() {
    if ( document.getElementById("menu").style.display == "none")
      document.getElementById("menu").style.display = "block";
    else 
    document.getElementById("menu").style.display = "none";
  }
}
