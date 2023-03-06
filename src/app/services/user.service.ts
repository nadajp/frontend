import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "https://backend.nadajp.repl.co/"
  constructor(private httpClient: HttpClient) { 
  }

  registerUser(login: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}register`, login)
  }

  login(login: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}login`, login)
  }

}
