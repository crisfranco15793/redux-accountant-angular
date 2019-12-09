import { Action, createReducer, on } from '@ngrx/store';
import * as AccountantActions from './accountant.actions';
import { AppState } from '../../app.reducers';

export const initialState: AppState = {
    accountant: 10,
};

const accountantReducer = createReducer(
    initialState,
    on(AccountantActions.increaseAction, state => ({ ...state, accountant: state.accountant + 1 })),
    on(AccountantActions.decreamentAction, state => ({ ...state, accountant: state.accountant - 1 })),
    on(AccountantActions.multiplyAction, (state, { multiplier }) => ({ ...state, accountant: state.accountant * multiplier })),
    on(AccountantActions.divideAction, (state, { divider }) => ({ ...state, accountant: state.accountant / divider })),
    on(AccountantActions.resetAction, state => ({ ...state, accountant: 0 }))
);

export function reducer(state: AppState | undefined, action: Action) {
    return accountantReducer(state, action);
}
