import {LoginCredentialsInterface} from "@shared/interfaces/auth.interface";

export class Login {
  static readonly type = '[Login] Do login';
  constructor(public payload: LoginCredentialsInterface) { }
}
