import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { AboutComponent }   from './about/about.component';
import { ScoutsComponent }   from './scouts/scouts.component';
import { ScoutDetailComponent }   from './scout-detail/scout-detail.component';
import { MasterComponent }   from './master/master.component';


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
  },
  {
   path: 'scouts/:id',
   component: ScoutDetailComponent
 },
  {
    path: 'master',
    component: MasterComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
