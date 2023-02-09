import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {environment} from "@env/environment";
// import {AuthState} from '@shared/states/auth/auth.state';

@Injectable({
  providedIn: 'root'
})
export class BearerService implements HttpInterceptor {

  constructor(private store: Store) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req.url);
    if (!req.url.startsWith('http')) {
      req = req.clone({
        url: `${environment.apiUrl}/${req.url}`
      })
    }
    /*const token = this.store.selectSnapshot(AuthState.token);
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });*/

    return next.handle(req);
  }
}
