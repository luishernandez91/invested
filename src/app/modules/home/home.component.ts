import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {CustomerInterface} from "@shared/interfaces/customer.interface";
import {CustomersState} from "@state/customer/customers.state";
import {AddCustomer, GetCustomers, UpdateCustomer} from "@state/customer/customers.actions";
import {MatDialog} from "@angular/material/dialog";
import {CustomerFormComponent} from "@modules/dashboard/customer-form/customer-form.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  @Select(CustomersState.customers) customers$!: Observable<CustomerInterface[]>;
  displayedColumns: string[] = ['id', 'name', 'lastname', 'email'];
  constructor(private store: Store, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetCustomers());
  }

  openDialog(customer: CustomerInterface | null = null): void {
    const dialogRef = this.dialog.open(CustomerFormComponent, {
      data: {
        create: !customer,
        customer
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      if (customer?.uid) {
        this.store.dispatch(new UpdateCustomer(customer.uid, result))
      } else {
        this.store.dispatch(new AddCustomer(result));
      }
    });
  }

}
