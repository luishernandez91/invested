import { Injectable } from '@angular/core';
import {State, Action, StateContext, Selector} from '@ngxs/store';
import {GetCustomers, AddCustomer, UpdateCustomer, DeleteCustomer, GetCustomerById} from './customers.actions';
import {CustomerInterface} from "@shared/interfaces/customer.interface";
import {CustomerService} from "@services/customer/customer.service";
import {tap} from "rxjs";

export class CustomersStateModel {
  public customers!: CustomerInterface[];
}


@State<CustomersStateModel>({
  name: 'customers',
  defaults: {
    customers: [],
  }
})
@Injectable()
export class CustomersState {
  constructor(private readonly customerService: CustomerService) {
  }

  /**
   * Get users from state
   * @param state
   */
  @Selector()
  static customers(state: CustomersStateModel): CustomerInterface[] | null {
    return state.customers;
  }

  @Selector()
  static customer(state: CustomersStateModel) {
    console.log(state);
    return (uid: string) => {
      console.log(uid)
      return state.customers.find(customer => customer.uid === uid);
    };
  }

  @Action(GetCustomers)
  list({getState, setState}: StateContext<CustomersStateModel>) {
    const state = getState();
    if (state.customers.length > 0) {
      return state;
    }
    return this.customerService.getCustomers().pipe(
      tap((customers: CustomerInterface[]) => {
        const state = getState();
        setState({...state, customers: [...getState().customers, ...customers]});
      })
    );
  }
  /**
   * Request for user creation and updates users state
   * @param getState
   * @param patchState
   * @param payload
   */
  @Action(AddCustomer)
  addUser({getState, patchState}: StateContext<CustomersStateModel>, {payload}: AddCustomer) {
    return this.customerService.postCustomer(payload).pipe(
      tap((customer) => {
        const state = getState();
        patchState({
          customers: [...state.customers, customer],
        });
      })
    );
  }
}
