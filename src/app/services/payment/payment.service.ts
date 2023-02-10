import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private readonly http: HttpClient) { }

  getPaymentsByCredit(credit: string) {
    return this.http.get(`/payments/${credit}`);
  }
}
