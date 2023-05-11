import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WebRequestService {
  constructor(private http: HttpClient) {

  }

  get(url:string, params:[]){
    return this.http.get(url);
  }
}
