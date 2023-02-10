import {CustomerInterface} from "@shared/interfaces/customer.interface";

export class GetCustomers {
  static readonly type = '[Customers] Get customers';
}

export class GetCustomerById {
  static readonly type = '[Customers] Get customer';
  constructor(public id: string) {
  }
}

export class AddCustomer {
  static readonly type = '[Customers] Add customer';

  constructor(public payload: CustomerInterface) {
  }
}

export class UpdateCustomer {
  static readonly type = '[Customers] Update customer';

  constructor(public id: string, public payload: CustomerInterface) {
  }
}

export class DeleteCustomer {
  static readonly type = '[Customers] Delete customer';

  constructor(public id: string) {
  }
}
