// routes
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './containers';
import { NonAuthorisedMasterTemplateComponent } from 'src/app/containers';

export const ROUTES: Routes = [
  {
    path: 'login',
    component: NonAuthorisedMasterTemplateComponent,
    children: [
      {
        path: '',
        component:  LoginComponent
      }
    ]
  }
];


export const loginRouting: ModuleWithProviders = RouterModule.forChild(ROUTES);
