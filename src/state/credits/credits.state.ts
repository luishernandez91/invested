import {Injectable} from '@angular/core';
import {State, Action, StateContext, Selector} from '@ngxs/store';
import {GetCredits, AddCredit, GetCustomerCredits} from './credits.actions';
import {tap} from "rxjs";
import {CreditsService} from "@services/credits/credits.service";
import {CreditInterface} from "@shared/interfaces/credit.interface";

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
    return this.creditService.getCredits().pipe(
      tap((credits: CreditInterface[]) => {
        const state = getState();
        setState({...state, credits: [...credits]});
      })
    );
  }

  /**
   * Request for credit creation
   * @param getState
   * @param patchState
   * @param payload
   */
  @Action(AddCredit)
  addCredit({getState, patchState}: StateContext<CreditsStateModel>, {payload}: AddCredit) {
    return this.creditService.postCredit(payload).pipe(
      tap((credit) => {
        const state = getState();
        patchState({
          credits: [...state.credits, credit],
        });
      })
    );
  }

  /**
   * Retrieves all credits related to a given customer id
   * @param getState
   * @param patchState
   * @param id
   */
  @Action(GetCustomerCredits)
  getCustomerCredits({getState, setState}: StateContext<CreditsStateModel>, {id}: GetCustomerCredits) {
    return this.creditService.getCustomerCredits(id).pipe(
      tap((credits) => {
        const state = getState();
        setState({...state, credits: [...credits]});
      })
    );
  }
}
