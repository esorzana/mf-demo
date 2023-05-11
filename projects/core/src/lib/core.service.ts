import { Injectable } from '@angular/core';
import { filter } from 'rxjs';

export enum MESSAGE_EVENT {
  COUNTER = "COUNTER",
  CHANGE = "change.pokemon"
}

@Injectable({
  providedIn: 'root'
})

export class CoreService {
  functionMapper = new Map<String, any>();
  private userName: string = "";

  public get user(): string {
    return this.userName;
  }

  public login(userName: string, password: string): void {
    // Authentication for **honest** users TM. (c) Manfred Steyer
    this.userName = userName;
  }
  constructor() {
    console.log("CoreService Instance!", "version: 1.0.0");
  }

  register = (type: any, fn: any, context:any) => {
  
    const id = `${type}__${Date.now()}__${Math.floor(Math.random() * 1000)}`;
    this.functionMapper.set(id, { type, fn });
    window.addEventListener(type, (event) => fn(event, context));
    console.log(this.functionMapper);
    return this.unregister.bind(this, id);
   };

  unregister = (id: string) => { 
    if (this.functionMapper.has(id)) {
      const { type, fn } = this.functionMapper.get(id);
      window.removeEventListener(type, fn);
      this.functionMapper.delete(id);
    }
  };
  emit = (type: any, detail: any) => { 
    console.log(this.functionMapper);
    window.dispatchEvent(new CustomEvent(type, { detail }));
  };

  unregisterAll = () => { 
    for (let [id, data] of this.functionMapper) {
      if (filter(data)) {
        window.removeEventListener(data.type, data.fn);
        this.functionMapper.delete(id);
      }
    }
  }
}

