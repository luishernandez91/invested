import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Store} from "@ngxs/store";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AddCredit} from "@state/credits/credits.actions";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-credits-form',
  templateUrl: './credits-form.component.html',
  styleUrls: ['./credits-form.component.scss']
})
export class CreditsFormComponent {
  @Input() set customerId(value: string|undefined) {
    if (value !== undefined) {
      this.creditForm.get('customer_id')?.setValue(value);
    }
  }
  @Output() onCancel = new EventEmitter<boolean>();

  creditForm: FormGroup;

  savingCredit: boolean = false;

  constructor(private readonly store: Store, private _snackBar: MatSnackBar) {
    this.creditForm = new FormGroup({
      customer_id: new FormControl('', Validators.required),
      amount: new FormControl(0, [Validators.required, Validators.min(1000)]),
    });
  }

  saveCredit() {
    this.savingCredit = true;
    this.store.dispatch(new AddCredit(this.creditForm.value)).subscribe(data => {
      this._snackBar.open('Credit saved successfully', 'Close', {duration: 2500});
      this.savingCredit = false;
      this.creditForm.reset();
      this.onCancel.emit(true);
    });
  }
}
