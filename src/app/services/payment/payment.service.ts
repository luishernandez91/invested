import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private readonly http: HttpClient) { }

  getPaymentsByCredit(credit: string): Observable<any> {
    return this.http.get(`payments/${credit}`);
  }

  postPayment(payment: any): Observable<any> {
    return this.http.post(`payments`, payment);
  }
}
