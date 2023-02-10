export class AddPayment {
  static readonly type = '[Payments] Add payment';
  constructor(public payload: string) { }
}

export class GetPaymentsByCredit {
  static readonly type = '[Payments] Get payments by credit';
  constructor(public id: string) { }
}
