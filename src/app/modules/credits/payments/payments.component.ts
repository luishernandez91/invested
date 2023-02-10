import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Select, Store} from "@ngxs/store";
import {PaymentsState} from "@state/payments/payments.state";
import {Observable} from "rxjs";
import {AddPayment, GetPaymentsByCredit} from "@state/payments/payments.actions";
import {TableColumnsInterface} from "@shared/components/table/table.component";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent {
  @Select(PaymentsState.payments) payments$!: Observable<any>;

  paymentForm: FormGroup;
  addPayment: boolean = false;

  displayedColumns: string[] = ['id', 'amount', 'date'];

  paymentsTableColumns: TableColumnsInterface = {
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
        id: 'date',
        property: 'date',
        label: 'Date'
      }
    ]
  };

  constructor(public dialogRef: MatDialogRef<PaymentsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { customer_id: string, credit_id: string },
              private store: Store) {
    this.paymentForm = new FormGroup({
      credit_id: new FormControl(data.credit_id, Validators.required),
      customer_id: new FormControl(data.customer_id, Validators.required),
      amount: new FormControl(0, [Validators.required, Validators.min(1)]),
    });
    this.getCreditPayments(data.credit_id);
  }

  getCreditPayments(creditId: string) {
    console.log('getCreditPayments', creditId);
    this.store.dispatch(new GetPaymentsByCredit(creditId));
  }

  onSave() {
    this.store.dispatch(new AddPayment(this.paymentForm.value)).subscribe(()=>{
      this.addPayment = false;
      this.paymentForm.reset();
    });
  }
}
