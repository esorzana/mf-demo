import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

export class LoadDataWrapper <T>{
  data: T;
  constructor(data:T){
    this.data = data;
  }
}

@Injectable({
  providedIn: 'root'
})


export class LoadDataService {

  constructor() { }


  loadData<T>(loadFunc:Observable<T>, target:LoadDataWrapper<T>, nextFunc?:Function):Subscription{
    return loadFunc.subscribe((res:T)=>{
      if(res){
        target.data = res;
      }
      
      if(nextFunc){
        nextFunc(res);
      }
    })
  }
}
