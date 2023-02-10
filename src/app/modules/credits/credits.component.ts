import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {map, Observable} from "rxjs";
import {CreditsState} from "@state/credits/credits.state";
import {CreditInterface} from "@shared/interfaces/credit.interface";
import {MatDialog} from "@angular/material/dialog";
import {GetCredits} from "@state/credits/credits.actions";
import {TableColumnsInterface} from "@shared/components/table/table.component";
import {ActivatedRoute} from "@angular/router";
import {CustomerInterface} from "@shared/interfaces/customer.interface";
import {CustomersState} from "@state/customer/customers.state";
import {GetCustomers} from "@state/customer/customers.actions";

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {
  @Select(CreditsState.credits) credits$!: Observable<CreditInterface[]>;

  customer!: CustomerInterface | undefined;
  displayedColumns: string[] = ['id', 'amount', 'status', 'customer'];

  creditTableColumns: TableColumnsInterface = {
    displayedColumns: this.displayedColumns,
    columnsConfig: [
      {
        id: 'id',
        property: '_id',
        label: '#'
      },
      {
        id: 'amount',
        property: 'amount',
        label: 'Amount'
      },
      {
        id: 'status',
        property: 'status',
        label: 'Status'
      },
      {
        id: 'customer',
        property: 'customer_name',
        label: 'Customer'
      }
    ]
  }

  constructor(private store: Store, public dialog: MatDialog, private readonly route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetCredits());
    /*this.route.queryParams
      .subscribe(params => {
        console.log(params);
        }
      );*/
    this.store.dispatch(new GetCustomers());
    this.setCustomerData()
  }

  setCustomerData() {
    const customerId = this.route.snapshot.paramMap.get('customer');
    if (customerId) {
      this.store.select(CustomersState.customer).pipe(map(
        filterFn => filterFn(customerId)))
        .subscribe((customer) => {
          this.customer = customer;
          if (customer) {
            this.creditTableColumns.displayedColumns = [...this.displayedColumns.filter(column => column !== 'customer')]
          }
        });
    }
  }
}
