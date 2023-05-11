import { Injectable } from '@angular/core';
import { combineLatest, concat, delay, finalize, first, map, Observable, Subscription, switchMap, tap, withLatestFrom, zipAll } from 'rxjs';
import { Layout } from '../../models/layout.model';
import { Panel } from '../../models/panel.model';
import { PanelRepositoryService } from './panel-repository.service';
import { WebRequestService } from '../web-request.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutRepositoryService {
  //get userid by autentication
  USER: string | undefined = "root"; 
  LAYOUT: string | undefined;
  constructor(private webService: WebRequestService, private panelRepo:PanelRepositoryService) {
    console.log(typeof(this.getLayoutById));
  }

  getLayouts() {
    return this.webService.get<Layout[]>(`/users/${this.USER}/layouts`);
  }

  getLayoutById(layoutId:string){
    return this.webService.get<Layout>(`/users/${this.USER}/layouts/${layoutId}`).pipe(
      delay(100) //for testing loading
    )
  }

  updateLayout(layout:Layout, removedPanels:Panel[]){
    console.log(`/users/${this.USER}/layouts/${layout.id}`, layout);
    return this.webService.patch<any>(`/users/${this.USER}/layouts/${layout.id}`, {"layout": layout, "rm-panels": removedPanels});
  }
}
