import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

/**
 * Bootstraps the Login Components
 */

@Component({
  selector: 'app-prd-login-component',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit, OnDestroy {

  loginSubscription: Subscription;

  constructor(
    private store: Store<fromStore.LoginState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginSubscription = this.store.pipe(select(fromStore.getLoggedInUser)).subscribe(data => {
    });

  }


  onSignIn(value) {
    this.store.dispatch(new fromStore.LoginUser(value));
    this.router.navigate(['/organisation']);
  }

  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
  }

}
