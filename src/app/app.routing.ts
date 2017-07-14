import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { AboutComponent }   from './about/about.component';
import { ScoutsComponent }   from './scouts/scouts.component';

const appRoutes: Routes = [
  {
  path: '',
  component: BaseComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'scouts',
    component: ScoutsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
