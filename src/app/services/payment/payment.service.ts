import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private readonly http: HttpClient, private datePipe: DatePipe) {
  }

  getPaymentsByCredit(credit: string): Observable<any> {
    return this.http.get(`payments/credit/${credit}`).pipe(
      map((payments: any) => {
        for (const payment of payments) {
          payment.date = this.datePipe.transform(payment.date,'yyyy-MM-dd');
        }
        return payments;
      })
    );
  }

  postPayment(payment: any): Observable<any> {
    return this.http.post(`payments`, payment).pipe(
      map((payment: any) => {
        payment.date = this.datePipe.transform(payment.date,'yyyy-MM-dd');
        return payment;
      })
    );
  }
}
