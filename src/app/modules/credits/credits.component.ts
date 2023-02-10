import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {map, Observable} from "rxjs";
import {CreditsState} from "@state/credits/credits.state";
import {CreditInterface} from "@shared/interfaces/credit.interface";
import {GetCredits, GetCustomerCredits} from "@state/credits/credits.actions";
import {TableColumnsInterface} from "@shared/components/table/table.component";
import {ActivatedRoute} from "@angular/router";
import {CustomerInterface} from "@shared/interfaces/customer.interface";
import {CustomersState} from "@state/customer/customers.state";
import {AddCustomer, GetCustomers, UpdateCustomer} from "@state/customer/customers.actions";
import {CustomerFormComponent} from "@modules/dashboard/customer-form/customer-form.component";
import {MatDialog} from "@angular/material/dialog";
import {PaymentsComponent} from "@modules/credits/payments/payments.component";

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {
  @Select(CreditsState.credits) credits$!: Observable<CreditInterface[]>;

  customer!: CustomerInterface | undefined;
  displayedColumns: string[] = ['id', 'amount', 'status', 'customer'];
  creatingCredit!: boolean;

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

  constructor(private store: Store,
              private readonly route: ActivatedRoute,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getCredits();
  }

  getCredits() {
    this.route.paramMap
      .subscribe((params) => {
          const customer = params.get('customer');
          if (customer) {
            this.store.dispatch(new GetCustomers());
            this.store.dispatch(new GetCustomerCredits(customer));
            this.setCustomerData(customer)
          } else {
            this.store.dispatch(new GetCredits());
          }
        }
      );
  }

  setCustomerData(customerId: string) {
    this.store.select(CustomersState.customer).pipe(map(
      filterFn => filterFn(customerId)))
      .subscribe((customer) => {
        this.customer = customer;
        if (customer) {
          this.creditTableColumns.displayedColumns = [...this.displayedColumns.filter(column => column !== 'customer')]
        }
      });
  }

  showPayments({_id: credit_id, customer_id}: CreditInterface) {
    const dialogRef = this.dialog.open(PaymentsComponent, {
      data: {credit_id, customer_id},
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
