import { ModuleFederationToolsModule } from '@angular-architects/module-federation-tools';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

import {GridsterModule} from 'angular-gridster2';
import { LayoutComponent } from './pages/layout/layout.component';
import { ManfredTmpComponent } from './pages/manfred-tmp/manfred-tmp.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ManfredTmpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    ModuleFederationToolsModule,
    HttpClientModule,
    GridsterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
