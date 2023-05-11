import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebRequestService } from './web-request.service';

@Injectable({
    providedIn: 'root'
})

export class PokeRepositoryService {

    BASE_URL = 'https://pokeapi.co/api/v2/'
    constructor(private http: WebRequestService) {

    }

    getPokemons() {
        let url = this.BASE_URL + 'pokemon?limit=151'
        return this.http.get(url, []);
    }

    genericGet(url:string){
        return this.http.get(url, []);
    }
}
