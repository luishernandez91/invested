import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerInterface} from "@shared/interfaces/customer.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit{
  customer: CustomerInterface= {};
  create = false;

  customerForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CustomerFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly router: Router
  ) {
    console.log(data);
    this.customerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
    });
    Object.assign(this, data);
  }

  ngOnInit() {
    this.setNewUserParams();
  }

  onSave() {
    this.dialogRef.close(this.customerForm.value);
  }

  /**
   * If action is user edition, then set form control changes
   * @returns void
   */
  setNewUserParams() {
    if (this.customer && !this.create) {
      this.customerForm.patchValue(this.customer);
      this.customerForm.get('amount')?.disable();
    }
  }

  seeCustomerCredits() {
    this.router.navigate([`/credits/customer/${this.customer.uid}`])
      .then(_ => this.dialogRef.close());
  }
}
