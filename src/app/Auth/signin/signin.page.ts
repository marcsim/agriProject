import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private as: AuthService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  public async signIn(form) {
    const $value = this.form.value;
    if ($value.email && $value.password) {
      this.as.signIn($value.email, $value.password);
    } else {
      this.as.toast('Entrer votre email et votre mot de passe', 'warning');
    }


  }

  private initForm() {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

}
