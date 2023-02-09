import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { CreditsAction } from './credits.actions';

export class CreditsStateModel {
  public items: string[];
}

const defaults = {
  items: []
};

@State<CreditsStateModel>({
  name: 'credits',
  defaults
})
@Injectable()
export class CreditsState {
  @Action(CreditsAction)
  add({ getState, setState }: StateContext<CreditsStateModel>, { payload }: CreditsAction) {
    const state = getState();
    setState({ items: [ ...state.items, payload ] });
  }
}
