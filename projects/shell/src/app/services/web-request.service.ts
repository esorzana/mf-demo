import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

enum ENDPOINTS{
  LAYOUT ="/user/root/layouts/"
}

@Injectable({
  providedIn: 'root'
})

export class WebRequestService {
  private BASE_URL:string = "http://192.168.15.30:3034";

  //private BASE_URL:string = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  private _formatURL(endponint:string):string{
    return  this.BASE_URL + endponint;
  }

  get<T>(endponint:string):Observable<T>{
     return this.http.get<T>(this._formatURL(endponint), );
  }

  patch<T>(endponint:string, object:T):Observable<String>{
    return this.http.patch<string>(this._formatURL(endponint), object);
  }
}
