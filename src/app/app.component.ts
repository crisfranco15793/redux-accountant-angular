import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increaseAction, decreamentAction } from './components/accountant/accountant.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  accountant: number;

  constructor(private store: Store<AppState>) {
    this.store.select('accountant').subscribe(accountant => this.accountant = accountant);
  }

  increase(): void {
    this.store.dispatch(increaseAction());
  }

  decrement(): void {
    this.store.dispatch(decreamentAction());
  }

}

