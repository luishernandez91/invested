import {Injectable} from '@angular/core';
import {State, Action, StateContext, Selector} from '@ngxs/store';
import {Login} from './auth.actions';
import {AuthService} from "@services/auth/auth.service";
import {LoginCredentialsInterface, LoginResponseInterface} from "@shared/interfaces/auth.interface";
import {catchError, Observable, tap} from "rxjs";

export class AuthStateModel {
  public token!: string;
  public user!: any;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: 'null',
    user: {}
  }
})
@Injectable()
export class AuthState {

  constructor(private readonly authService: AuthService) {
  }

  /**
   * Get token
   * @param state
   */
  @Selector()
  static token(state: AuthStateModel): string | null {
    return state.token;
  }

  /**
   * Validates if user has an active session
   * @param state
   */
  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    console.log((typeof state.token))
    return state.token !== 'null';
  }

  /**
   * Handle login actions for user authentication
   * @param ctx
   * @param payload
   */
  @Action(Login)
  login(ctx: StateContext<AuthStateModel>, {payload}: Login): Observable<LoginResponseInterface | null> {
    return this.authService.login(payload).pipe(
      catchError((err) => {
        throw err;
      }),
      tap((result) => {
        ctx.patchState({
            token: result?.token,
            user: result?.user
          }
        );
      })
    );
  }
}
