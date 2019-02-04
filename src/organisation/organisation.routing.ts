// routes
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { OrganisationComponent } from './containers';
import { AuthorisedMasterTemplateComponent } from 'src/app/containers';

export const ROUTES: Routes = [
  {
    path: 'organisation',
    component: AuthorisedMasterTemplateComponent,
    children: [
      {
        path: '',
        component: OrganisationComponent
      }
    ]
  }
];


export const organisationRouting: ModuleWithProviders = RouterModule.forChild(ROUTES);
