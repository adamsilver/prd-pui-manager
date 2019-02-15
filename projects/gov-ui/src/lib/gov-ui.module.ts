import { NgModule } from '@angular/core';
import {HmctsSubNavigationComponent} from './components/hmcts-sub-navigation/hmcts-sub-navigation.component';
import {HmctsIdentityBarComponent} from './components/hmcts-identity-bar/hmcts-identity-bar.component';
import {GovukTableComponent} from './components/govuk-table/govuk-table.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
const COMPONENTS = [
  GovukTableComponent,
  HmctsIdentityBarComponent,
  HmctsSubNavigationComponent
];
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class GovUiModule { }