import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {CreditsState} from "@state/credits/credits.state";
import {CreditInterface} from "@shared/interfaces/credit.interface";
import {MatDialog} from "@angular/material/dialog";
import {GetCredits} from "@state/credits/credits.actions";
import {TableColumnsInterface} from "@shared/components/table/table.component";

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit{
  @Select(CreditsState.credits) credits$!: Observable<CreditInterface[]>;

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

  constructor(private store: Store, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetCredits());
  }
}
