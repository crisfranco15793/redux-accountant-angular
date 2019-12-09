import { createAction, props } from '@ngrx/store';

export const increaseAction = createAction(
    '[Accountant] Increase'
);

export const decreamentAction = createAction(
    '[Accountant] Decrement'
);

export const multiplyAction = createAction(
    '[Accountant] Multiply',
    props<{ multiplier: number }>()
);

export const divideAction = createAction(
    '[Accountant] Divide',
    props<{ divider: number }>()
);

export const resetAction = createAction(
    '[Accountant] Reset'
);
