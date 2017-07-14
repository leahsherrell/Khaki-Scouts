import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';

const appRoutes: Routes = [
  {
  path: '',
  component: BaseComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
