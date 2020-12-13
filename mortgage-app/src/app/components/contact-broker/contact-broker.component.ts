import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { element } from 'protractor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-broker',
  templateUrl: './contact-broker.component.html',
  styleUrls: ['./contact-broker.component.scss']
})
export class ContactBrokerComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute, config: NgbRatingConfig, private router: Router) { 
    config.max = 5;
  }
  message:any;
  realters: any="";
  brokersArray: any="";
  lawyersArray: any="";
  currentRate:number=0;
  async ngOnInit(){
    var id;
        this.route.queryParams
            .subscribe(params => {
                id = params['id'];
            });
   
    this.realters= await this.readJsonRealters(0);
    this.currentRate=this.realters.description.rating;
    this.brokersArray= await this.readJsonBrokers()
    this.lawyersArray= await this.readJsonLawyers()

  }

  async readJsonRealters(id:number){
    let json= await this.getJSONRealters().toPromise();
    return json[id];
  }
  
  public getJSONRealters(): Observable<any> {
    return this.http.get("./assets/realters-data.json");
  }

  async readJsonBrokers(){
    let json= await this.getJSONBrokers().toPromise();
    let brokersArray = [];

    for(var i in json)
      brokersArray.push(json[i]);

    return brokersArray.slice(0,3);
  }
  
  public getJSONBrokers(): Observable<any> {
    return this.http.get("./assets/brokers-data.json");
  }

  async readJsonLawyers(){
    let json= await this.getJSONLawyers().toPromise();
    let brokersArray = [];

    for(var i in json)
      brokersArray.push(json[i]);

    return brokersArray.slice(0,3);
  }
  
  public getJSONLawyers(): Observable<any> {
    return this.http.get("./assets/lawyers-data.json");
  }

  public goToBrokersMap(){
    this.router.navigate(['find-brokers']);
  }
  
  public goToLawyersMap(){
    this.router.navigate(['find-lawyers']);
  }
}
