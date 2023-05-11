import { GridsterConfig } from "angular-gridster2";
import { Panel } from "./panel.model";

export interface Layout {
    id:string;
    grid_options: GridsterConfig;
    panel: Panel[];
  }
  