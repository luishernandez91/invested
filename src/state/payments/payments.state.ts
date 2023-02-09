import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { PaymentsAction } from './payments.actions';

export class PaymentsStateModel {
  public items: string[];
}

const defaults = {
  items: []
};

@State<PaymentsStateModel>({
  name: 'payments',
  defaults
})
@Injectable()
export class PaymentsState {
  @Action(PaymentsAction)
  add({ getState, setState }: StateContext<PaymentsStateModel>, { payload }: PaymentsAction) {
    const state = getState();
    setState({ items: [ ...state.items, payload ] });
  }
}
