import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Broker } from '../models/broker';
import { BrokerDTO } from '../models/broker-dto';

@Injectable({
    providedIn: 'root'
  })

export class BrokerService{

    private baseUrl = "http://localhost:8080/api"
    
    constructor(private http: HttpClient){}

    getBroker(id: string): Observable<Broker>{
        return this.http.get<Broker>(this.baseUrl + "/broker", {
            params: new HttpParams()
            .set('id',id)
        });
    }

    getFirstXBrokers(nrOfBrokersToDisplay: number): Observable<BrokerDTO[]>{
        return this.http.get<BrokerDTO[]>(this.baseUrl + "/brokers", {
            params: new HttpParams()
            .set('firstXBrokers',nrOfBrokersToDisplay.toString())
        });
    }

    getBrokers():Observable<Broker[]>{
        return this.http.get<Broker[]>(this.baseUrl + "/brokers");
    }

    getRealEstateBroker(propertyId: string): Observable<Broker>{
        return this.http.get<Broker>(this.baseUrl + "/broker/real-estate", {
            params: new HttpParams()
            .set('propertyId',propertyId)
        });
    }

}