import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAffordabilityDTO } from '../dtoModels/user-affordability-dto';
import { UniversalModel } from '../models/universal-model';
import { UserLoginDTO } from '../models/user-login';

@Injectable({
    providedIn: 'root'
  })

export class UserService{

    private baseUrl = "http://localhost:8080/api/user"
    
    constructor(private http: HttpClient){}

    loginUser(loginDTO: UserLoginDTO): Observable<UniversalModel>{
        return this.http.get<UniversalModel>(this.baseUrl + "/login", {
            params: new HttpParams()
            .set('userEmail',loginDTO.email)
            .set('userPassword', loginDTO.password)
        });
    }

    createUser(user: UniversalModel): Observable<UniversalModel>{
        return this.http.post<UniversalModel>(this.baseUrl, user);
    }

    updateUser(user: UniversalModel): Observable<UniversalModel>{
        return this.http.put<UniversalModel>(this.baseUrl, user);
    }

    getUserAffordability(user: UniversalModel): Observable<UniversalModel>{
        return this.http.post<UniversalModel>(this.baseUrl + "/affordability", user);
    }

}