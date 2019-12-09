import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { multiplyAction, divideAction } from '../accountant.actions';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  accountant: number;

  constructor(private store: Store<AppState>) {
    this.store.select('accountant').subscribe(accountant => this.accountant = accountant);
  }

  ngOnInit() {
  }

  multiply(): void {
    this.store.dispatch(multiplyAction({ multiplier: 2 }));
  }

  divide(): void {
    this.store.dispatch(divideAction({ divider: 2 }));
  }

}
