import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromSingleFeeAccountStore from '../../../fee-accounts/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-authorised-master-template',
    templateUrl: './authorised-master-template.component.html'
})
export class AuthorisedMasterTemplateComponent implements OnInit {
  title = 'app';

  identityBar$: Observable<fromSingleFeeAccountStore.FeeAccountsState[]>;

  constructor(
    private store: Store<fromSingleFeeAccountStore.FeeAccountsState>
  ) { }

  ngOnInit() {
    this.identityBar$ = this.store.pipe(select(fromSingleFeeAccountStore.getSingleFeeAccountArray));
  }
}
