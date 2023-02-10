import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() items: any[];
  @Input() columns: TableColumnsInterface;
  @Output() onClickedRow = new EventEmitter<any>();

  constructor() {
    this.items = [];
    this.columns = {
      displayedColumns: []
    };
  }
}

export interface TableColumnsInterface {
  columnsConfig?: Array<{ id: string, property: string, label: string }>,
  displayedColumns: Array<string>
}
