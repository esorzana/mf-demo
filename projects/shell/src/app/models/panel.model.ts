import { Widget } from "./widget.model";

export interface Panel {
    id: string;
    widget: Widget;
    cols: Number;
    rows: Number;
    x: Number;
    y: Number;
  }
  