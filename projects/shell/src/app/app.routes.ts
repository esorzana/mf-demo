import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';


import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { AppComponent } from './app.component';
import { LayoutComponent } from './pages/layout/layout.component';


export const APP_ROUTES: Routes = [
    // Your route here:
    {
      path: '',
      component: LayoutComponent,
      pathMatch: 'full'
    },

    {
      path: 'layout/id',
      component: LayoutComponent,
      pathMatch: 'full'
    },
    //Local usage
    {
      path: 'mfe1',
      component: WebComponentWrapper,
      data: {
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'mfe1',
        exposedModule: './web-components',
        elementName: 'mfe1-element',
      } as WebComponentWrapperOptions
    },
  

    {
      path: 'mfe2',
      component: WebComponentWrapper,
      data: {
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        remoteName: 'mfe2',
        exposedModule: './web-components',
        elementName: 'mfe2-element',
      } as WebComponentWrapperOptions
    },
    
    {
      path: 'angular1',
      component: WebComponentWrapper,
      data: {
        remoteEntry: 'https://nice-grass-018f7d910.azurestaticapps.net/remoteEntry.js',
        remoteName: 'angular1',
        exposedModule: './web-components',
        elementName: 'angular1-element'
      } as WebComponentWrapperOptions
    },    

    {
      path: 'angular2',
      component: WebComponentWrapper,
      data: {
        remoteEntry: 'https://gray-pond-030798810.azurestaticapps.net//remoteEntry.js',
        remoteName: 'angular2',
        exposedModule: './web-components',
        elementName: 'angular2-element'
      } as WebComponentWrapperOptions
    },   
    
    {
      matcher: startsWith('angular3'),
      component: WebComponentWrapper,
      data: {
        remoteEntry: 'https://gray-river-0b8c23a10.azurestaticapps.net/remoteEntry.js',
        // remoteEntry: 'http://localhost:4202/remoteEntry.js',
        remoteName: 'angular3',
        exposedModule: './web-components',
        elementName: 'angular3-element'
      } as WebComponentWrapperOptions
    }, 
    {
      path: 'vue',
      component: WebComponentWrapper,
      data: {
        remoteEntry: 'https://mango-field-0d0778c10.azurestaticapps.net/remoteEntry.js',
        remoteName: 'vue',
        exposedModule: './web-components',
        elementName: 'vue-element'
      } as WebComponentWrapperOptions
    },  
    
    {
      path: 'angularjs',
      component: WebComponentWrapper,
      data: {
        remoteEntry: 'https://calm-mud-0a3ee4a10.azurestaticapps.net/remoteEntry.js',
        remoteName: 'angularjs',
        exposedModule: './web-components',
        elementName: 'angularjs-element'
      } as WebComponentWrapperOptions
    },     

    {
      matcher: startsWith('angular3'),
      component: WebComponentWrapper,
      data: {
        remoteEntry: 'https://gray-river-0b8c23a10.azurestaticapps.net/remoteEntry.js',
        remoteName: 'angular3',
        exposedModule: './web-components',
        elementName: 'angular3-element'
      } as WebComponentWrapperOptions
    }, 

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];

