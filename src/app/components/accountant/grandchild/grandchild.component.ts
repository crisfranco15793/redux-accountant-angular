import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { resetAction } from '../accountant.actions';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.scss']
})
export class GrandchildComponent implements OnInit {

  accountant: number;

  constructor(private store: Store<AppState>) {
    this.store.select('accountant').subscribe(accountant => this.accountant = accountant);
  }

  ngOnInit() {
  }

  reset(): void {
    this.store.dispatch(resetAction());
  }

}
