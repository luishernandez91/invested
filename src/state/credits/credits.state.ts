import { Injectable } from '@angular/core';
import {State, Action, StateContext, Selector} from '@ngxs/store';
import { GetCredits } from './credits.actions';
import {tap} from "rxjs";
import {CreditsService} from "@services/credits/credits.service";
import {CreditInterface} from "@shared/interfaces/credit.interface";
import {CustomerInterface} from "@shared/interfaces/customer.interface";
import {CustomersStateModel} from "@state/customer/customers.state";

export class CreditsStateModel {
  public credits!: CreditInterface[];
}


@State<CreditsStateModel>({
  name: 'credits',
  defaults: {
    credits: []
  }
})
@Injectable()
export class CreditsState {

  constructor(private readonly creditService: CreditsService) {
  }

  /**
   * Get users from state
   * @param state
   */
  @Selector()
  static credits(state: CreditsStateModel): CreditInterface[] | null {
    return state.credits;
  }


  @Action(GetCredits)
  list({getState, setState}: StateContext<CreditsStateModel>) {
    const state = getState();
    if (state.credits.length > 0) {
      return state;
    }
    return this.creditService.getCredits().pipe(
      tap((credits: CreditInterface[]) => {
        const state = getState();
        setState({...state, credits: [...getState().credits, ...credits]});
      })
    );
  }

}
