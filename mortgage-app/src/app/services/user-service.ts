import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UniversalModel } from '../models/universal-model';
import { UserLoginDTO } from '../models/user-login';

@Injectable({
    providedIn: 'root'
  })

export class UserService{

    private baseUrl = "http://localhost:8080/api"
    
    constructor(private http: HttpClient){}

    loginUser(userLoginDTO: UserLoginDTO): Observable<UniversalModel>{
        return this.http.post<UniversalModel>(this.baseUrl + "/login/user", userLoginDTO);
    }

    createUser(user: UniversalModel): Observable<UniversalModel>{
        return this.http.post<UniversalModel>(this.baseUrl + "/user", user);
    }

}