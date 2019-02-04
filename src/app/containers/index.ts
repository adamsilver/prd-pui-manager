
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {FromBuilderComponent} from './form-builder/from-builder.component';
import { AuthorisedMasterTemplateComponent } from './authorised-master-template/authorised-master-template.component';
import { NonAuthorisedMasterTemplateComponent } from './non-authorised-master-template/non-authorised-master-template.component';

export const containers: any[] = [
  HeaderComponent,
  FooterComponent,
  AuthorisedMasterTemplateComponent,
  NonAuthorisedMasterTemplateComponent
];

export * from './footer/footer.component';
export * from './header/header.component';
export * from './form-builder/from-builder.component';
export * from './authorised-master-template/authorised-master-template.component';
export * from './non-authorised-master-template/non-authorised-master-template.component';
