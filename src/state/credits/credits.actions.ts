import {CreditInterface} from "@shared/interfaces/credit.interface";

export class GetCredits {
  static readonly type = '[Credits] Get credits';
}

export class AddCredit {
  static readonly type = '[Credits] Add credit';

  constructor(public payload: CreditInterface) {
  }
}

export class UpdateCredit {
  static readonly type = '[Credits] Update credit';

  constructor(public id: string, public payload: CreditInterface) {
  }
}

export class DeleteCredit {
  static readonly type = '[Credits] Delete credit';

  constructor(public id: string) {
  }
}
