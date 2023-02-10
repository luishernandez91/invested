import {Injectable} from '@angular/core';
import {State, Action, StateContext, Selector} from '@ngxs/store';
import {AddPayment, GetPaymentsByCredit} from './payments.actions';
import {tap} from "rxjs";
import {PaymentService} from "@services/payment/payment.service";

export class PaymentsStateModel {
  public payments!: any[];
}

@State<PaymentsStateModel>({
  name: 'payments',
  defaults: {
    payments: []
  }
})
@Injectable()
export class PaymentsState {

  constructor(private readonly paymentService: PaymentService) {
  }

  /**
   * Get users from state
   * @param state
   */
  @Selector()
  static payments(state: PaymentsStateModel): any[] | null {
    return state.payments;
  }

  @Action(AddPayment)
  addPayment({getState, patchState}: StateContext<PaymentsStateModel>, {payload}: AddPayment) {
    return this.paymentService.postPayment(payload).pipe(
      tap((payment) => {
        const state = getState();
        patchState({
          payments: [...state.payments, payment]
        });
      })
    )
  }

  @Action(GetPaymentsByCredit)
  list({getState, setState}: StateContext<PaymentsStateModel>, {id}: GetPaymentsByCredit) {
    return this.paymentService.getPaymentsByCredit(id).pipe(
      tap((payments: any[]) => {
        if (!payments) {
          payments = [];
        }
        const state = getState();
        setState({...state, payments: [...payments]});
      })
    );
  }
}
