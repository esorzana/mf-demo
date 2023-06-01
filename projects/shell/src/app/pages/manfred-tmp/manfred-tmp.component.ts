import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manfred-tmp',
  templateUrl: './manfred-tmp.component.html',
  styleUrls: ['./manfred-tmp.component.scss']
})
export class ManfredTmpComponent implements OnInit {

  constructor() { }
  gridOption = JSON.parse('{"gridType":"fit","compactType":"none","margin":10,"outerMargin":true,"outerMarginTop":null,"outerMarginRight":null,"outerMarginBottom":null,"outerMarginLeft":null,"useTransformPositioning":true,"mobileBreakpoint":640,"useBodyForBreakpoint":false,"minCols":1,"maxCols":100,"minRows":1,"maxRows":100,"maxItemCols":100,"minItemCols":1,"maxItemRows":100,"minItemRows":1,"maxItemArea":2500,"minItemArea":1,"defaultItemCols":1,"defaultItemRows":1,"fixedColWidth":105,"fixedRowHeight":105,"keepFixedHeightInMobile":false,"keepFixedWidthInMobile":false,"scrollSensitivity":10,"scrollSpeed":20,"enableEmptyCellClick":false,"enableEmptyCellContextMenu":false,"enableEmptyCellDrop":false,"enableEmptyCellDrag":false,"enableOccupiedCellDrop":false,"emptyCellDragMaxCols":50,"emptyCellDragMaxRows":50,"ignoreMarginInRow":false,"draggable":{"enabled":true},"resizable":{"enabled":true},"swap":false,"pushItems":true,"disablePushOnDrag":false,"disablePushOnResize":false,"pushDirections":{"north":true,"east":true,"south":true,"west":true},"pushResizeItems":false,"displayGrid":"always","disableWindowResize":false,"disableWarnings":false,"scrollToNewItems":false}')
  mfe1Options = {
    remoteEntry: "http://localhost:4201/remoteEntry.js",
    remoteName: "mfe1",
    exposedModule: './web-components',
    elementName: 'mfe1-element'
  }
  mfe2Options = {
    remoteEntry: "http://localhost:4202/remoteEntry.js",
    remoteName: "mfe2",
    exposedModule: './web-components',
    elementName: 'mfe2-element'
  }
  ngOnInit(): void {
  }

}
