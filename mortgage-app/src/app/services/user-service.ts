import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UniversalModel } from '../models/universal-model';
import { UserLoginDTO } from '../models/user-login';

@Injectable({
    providedIn: 'root'
  })

export class UserService{

    private baseUrl = "http://localhost:8080/api/user"
    
    constructor(private http: HttpClient){}

    loginUser(userEmail: string, userPassword: string): Observable<UniversalModel>{
        return this.http.get<UniversalModel>(this.baseUrl + "/login", {
            params: new HttpParams()
            .set('userEmail',userEmail)
            .set('userPassword', userPassword)
        });
    }

    createUser(user: UniversalModel): Observable<UniversalModel>{
        return this.http.post<UniversalModel>(this.baseUrl, user);
    }

    getUserAffordability(userAnnualIncome: number): Observable<number>{
        let param: any = { 'userAnnualIncome': userAnnualIncome };
        return this.http.get<number>(this.baseUrl + "/affordability",{
            params: param
        });
    }

}