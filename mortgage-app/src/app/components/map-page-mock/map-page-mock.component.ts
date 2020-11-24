import { Component, OnInit } from '@angular/core';

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
}
