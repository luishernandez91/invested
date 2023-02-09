import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {CreditInterface} from "@shared/interfaces/credit.interface";

@Injectable({
  providedIn: 'root'
})
export class CreditsService {

  constructor(private readonly http: HttpClient) {
  }

  getCredits(): Observable<CreditInterface[]> {
    return this.http.get<CreditInterface[]>('credits').pipe(
      map((response) => {
        for (const credit of response) {
          credit['customer_name'] = `${credit.customer_id?.name} ${credit.customer_id?.lastname}`;
        }
        return response;
      })
    );
  }
}
