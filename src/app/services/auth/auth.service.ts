import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginCredentialsInterface, LoginResponseInterface} from "@shared/interfaces/auth.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) {
  }

  login(credentials: LoginCredentialsInterface): Observable<LoginResponseInterface> {
    return this.http.post<LoginResponseInterface>('login', credentials);
  }
}
