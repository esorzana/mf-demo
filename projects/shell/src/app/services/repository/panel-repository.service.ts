import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Panel } from '../../models/panel.model';
import { WebRequestService } from '../web-request.service';

@Injectable({
  providedIn: 'root'
})
export class PanelRepositoryService {
  USER = 'root';
  constructor(private webService: WebRequestService) { }

  getPanelsByLayoutId(layoutId:string):Observable<Panel[]>{
    return this.webService.get<Panel[]>(`/users/${this.USER}/layouts/${layoutId}/panels`);
  }

  updatePanelsById(layoutId:string, panel:Panel):Observable<String>{
    return this.webService.patch(`/users/${this.USER}/layouts/${layoutId}/panels/${panel.id}`, panel);
  }
}
