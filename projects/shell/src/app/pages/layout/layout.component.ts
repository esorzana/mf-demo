
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridsterComponent, GridsterConfig, GridsterItem, GridsterItemComponentInterface } from 'angular-gridster2';
import { CoreService } from 'core';
import { Subscription } from 'rxjs';
import { Layout } from '../../models/layout.model';
import { Panel } from '../../models/panel.model';
import { Widget } from '../../models/widget.model';
import { LoadDataService, LoadDataWrapper } from '../../services/load-data.service';
import { LayoutRepositoryService } from '../../services/repository/layout-repository.service';
import { WidgetRepositoryService } from '../../services/repository/widget-repository.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  title = 'shell';
  pageLayout: Layout | any;
  @ViewChild('layout', { static: false }) pRef: GridsterComponent | undefined;
  panels: Panel[] | undefined;

  layouts: Layout[] = [];
  layoutId: string | any;

  storePanles: Panel[] = [];
  newPanels: Panel[] = [];
  changedPanels: Panel[] = [];
  removedPanels: Panel[] = [];

  widgets: Widget[] = [];
  selectedWidget: String | undefined;

  isLoading: boolean = false;
  subscriptions: Subscription = new Subscription;

  //testing
  ldLayouts:LoadDataWrapper<Layout[]> = new LoadDataWrapper([]);


  static itemChange(item: GridsterItem, itemComponent: GridsterItemComponentInterface){
    console.info('itemChanged', item, itemComponent);
  }


getUser(){
  return this.coreService.user;
}
 constructor (
    private layoutRepo: LayoutRepositoryService,
    private widgetRepo: WidgetRepositoryService,
    private coreService:CoreService) {
    
      this.coreService.login("emasorz", "");
    //testing
    //this.ldService.loadData(this.layoutRepo.getLayouts(), this.ldLayouts, () => console.log(this.ldLayouts))
  }

  onSelect(target:any){
    this.layoutId = target.value;
    this.loadLayout();
  }

  async ngOnInit(): Promise<void> {
    await this.layoutRepo.getLayouts().subscribe((layouts:Layout[])=>{
      if(layouts)
        this.layouts = layouts
    })


    this.subscriptions.add(this.widgetRepo.get().subscribe((widgets: Widget[]) => {
      if (widgets)
        this.widgets = widgets;
      this.isLoading = false;
    }))
  }


  loadLayout(){
    this.isLoading = true;
    this.subscriptions.add(this.layoutRepo.getLayoutById(this.layoutId).subscribe(result => {
      this.pageLayout = result;
      //setup callback function
      //wrap into function
      console.log(result);
      this.pageLayout.grid_options.itemChangeCallback = this.itemChange.bind(this) //bind this for pass context to callback function
      this.isLoading = false;
    }));
  }


  updateItem(index: number, newOpt: any) {
    // if (this.pageLayout)
    //   this.pageLayout.items[index].options = newOpt;
  }
  itemChange(item: any, itemComponent: any) {
    console.info('itemChanged', item);
    console.log(this.pageLayout.panel);
    // this.updateItem(parseFloat(itemComponent.el.id), item);
  }

  itemResize(item: any, itemComponent: any) {
    console.info('itemResized', item, itemComponent);
  }


  changedOptions() {
    if (this.pageLayout?.grid_options.api?.optionsChanged)
      this.pageLayout?.grid_options.api.api.optionsChanged();
  }



  onRemoveItem(item: any, id: string) {
    console.log(item, id);
    let index = this.pageLayout.panel.map((x: Panel) => { return x.id }).indexOf(id);
    console.log(index);
    console.log(this.pageLayout.panel[index]);
    this.removedPanels.push(this.pageLayout.panel.splice(index, 1));
  }



  addItem() {
    this.actionModal('radio-modal');
  }


  getWidget(id: String) {
    return this.widgets.filter(widget => { return widget.id === id })[0]
  }

  addPanel() {
    if (this.selectedWidget && this.selectedWidget != "default") {
      let panel: Panel = {
        id: 'TMP:' + (Date.now()), cols: 1, rows: 1, x: 0, y: 0, widget: this.getWidget(this.selectedWidget)
      }
      this.pageLayout?.panel.push(panel);
    } else {
      let panel: Panel = {
        id: 'TMP:' + (Date.now()), cols: 1, rows: 1, x: 0, y: 0, widget: { type: 'component', elementName: "", exposedModule: "", id: "TMP", name: "", remoteEntry: "", remoteName: "" }
      }
      this.pageLayout?.panel.push(panel);
    }

    this.actionModal('radio-modal');
  }

  setWidget(event: any) {
    this.selectedWidget = event.target.defaultValue;
    console.log(this.selectedWidget);
  }

  saveLayout() {
    this.layoutRepo.updateLayout(this.pageLayout, this.removedPanels).subscribe((res: any) => {
      if (res.status) {
        window.alert("Layout aggiornato correttamente");
      }
    })

    console.log("layouts", this.layouts);
  }

  actionModal(id: string) {
    let modal = document.getElementById(id);
    if (modal?.classList.contains('show-modal')) {
      modal.classList.remove('show-modal')
    } else {
      modal?.classList.add('show-modal')
    }
  }


  getLayoutOptionKeys() {
    return Object.keys(this.pageLayout.grid_options);
  }
  actionSidebar(id: string) {

    let modal = document.getElementById(id);
    console.log(modal);
    if (modal?.classList.contains('show-sidebar')) {
      modal.classList.remove('show-sidebar')
    } else {
      modal?.classList.add('show-sidebar')
    }
  }

  getPanelOptions(panel: Panel) {
    return { cols: panel.cols, rows: panel.rows, x: panel.x, y: panel.y }
  }

  getWidgetOptions(widget: Widget) {
    return { remoteEntry: widget.remoteEntry, remoteName: widget.remoteName, exposedModule: widget.exposedModule, elementName: widget.elementName } as Widget;
  }

  trackByFn(index: any, item: any) { return index; }
}
