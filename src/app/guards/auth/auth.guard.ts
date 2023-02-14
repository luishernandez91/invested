import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Store} from '@ngxs/store';
import {AuthState} from '@state/auth/auth.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private readonly router: Router) {
  }

  canActivate(): Promise<any>|boolean {
    console.log(this.store.selectSnapshot(AuthState.isAuthenticated));
    if (!this.store.selectSnapshot(AuthState.isAuthenticated)) {
      return this.router.navigate(['/login']);
    }
    return this.store.selectSnapshot(AuthState.isAuthenticated);
  }
}
