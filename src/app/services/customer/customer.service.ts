import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {CustomerInterface} from "@shared/interfaces/customer.interface";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private readonly http: HttpClient) {
  }

  getCustomers(): Observable<CustomerInterface[]> {
    return this.http.get<CustomerInterface[]>('customers');
  }

  postCustomer(payload: CustomerInterface): Observable<CustomerInterface> {
    return this.http.post<{message: string, customer: CustomerInterface}>('customers', payload).pipe(
      map(response => response.customer)
    );
  }
}
