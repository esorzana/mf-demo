import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoreService } from 'core';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: []
})

export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('mfe1-element', ce);
  }

}
