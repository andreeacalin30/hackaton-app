import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../models/property';

@Injectable({
    providedIn: 'root'
  })


export class PropertyService{

    private baseUrl = "http://localhost:8080/api"
    
    constructor(private http: HttpClient){}

    getProperties():Observable<Property[]>{
        return this.http.get<Property[]>(this.baseUrl + "/properties");
    }

    getProperty(id: string):Observable<Property>{
        return this.http.get<Property>(this.baseUrl + "/property", {
            params: new HttpParams()
            .set('id',id)
        });
    }

    
}