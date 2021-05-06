/* eslint-disable quote-props */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private as: AuthService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  public async signUp(form) {
    const $value = this.form.value;
    if ($value.fullName && $value.email && $value.password) {
      this.as.signUp($value.email, $value.fullName, $value.password);
    } else {
      this.as.toast('Veuillez compléter le formulaire', 'warning');
    }
  }

  private initForm() {
    this.form = this.formBuilder.group({
      email: '',
      fullName: '',
      password: ''
    });
  }
}
