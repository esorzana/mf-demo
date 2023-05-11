import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Widget } from '../../models/widget.model';
import { WebRequestService } from '../web-request.service';

@Injectable({
  providedIn: 'root'
})
export class WidgetRepositoryService {

  constructor(private webService: WebRequestService) { }


  get():Observable<Widget[]>{
    return this.webService.get<Widget[]>('/widgets');
  }
}
