import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Resource } from '../model/resource.model'

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private baseUrl = "https://backend.nadajp.repl.co/resource"
  constructor(private httpClient: HttpClient) { 
  }

  getResourceList(): Observable<Resource[]> {
    return this.httpClient.get<Resource[]>(`${this.baseUrl}`);
  }

  getResourceById(id: number): Observable<Resource> {
    return this.httpClient.get<Resource>(`${this.baseUrl}/${id}`)
  }

  deleteResouce(id: number) : Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }
}
