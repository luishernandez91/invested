import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngxs/store";
import {Login} from "@state/auth/auth.actions";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  loginForm: FormGroup;
  credentials = {
    email: 'luis@mail.com',
    password: '1234'
  }

  constructor(private store: Store, private router: Router, private _snackBar: MatSnackBar) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }

  login() {
    this.store.dispatch(new Login(this.loginForm.value)).subscribe(({auth}) => {
      if (auth.token) {
        this.router.navigate(['/']);
      } else {
        this._snackBar.open('Invalid user/password', 'OK')
      }
    });
  }
}
