import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-broker-description',
  templateUrl: './broker-description.component.html',
  styleUrls: ['./broker-description.component.scss']
})
export class BrokerDescriptionComponent implements OnInit {

  @Input() brokerInfo: any;
  constructor(private http: HttpClient, private route: ActivatedRoute, config: NgbRatingConfig, private router: Router) { 
    config.max = 5;
  }
  message:any;
  selectedBroker: any="";
  currentRate:number=0;
  async ngOnInit(){
    var id;
        this.route.queryParams
            .subscribe(params => {
                id = params['id'];
            });
   
    this.selectedBroker= await this.readJson(id);
    this.currentRate=this.selectedBroker.description.rating;
  }

  async readJson(id:number){
    let json= await this.getJSON().toPromise();
    return json[id];
  }
  
  public getJSON(): Observable<any> {
    return this.http.get("./assets/brokers-data.json");
  }

  public applyOnline(){
    this.router.navigate(['pre-q1']);
  }
  

}
