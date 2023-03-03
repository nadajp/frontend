import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:8080/"
  constructor(private httpClient: HttpClient) { 
  }

  registerUser(login: Login): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}register`, login)
  }

  login(login: Login): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}login`, login)
  }

}
