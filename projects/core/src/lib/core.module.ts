import { ModuleWithProviders, NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { CoreService } from './core.service';

@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
  ],
  exports: [
    CoreComponent
  ]
})

export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [CoreService],
    };
  }
 }
