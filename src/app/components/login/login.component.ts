import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthGuardService } from '../../service/authguard.service';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  mail;
  pass;


  loginForm= this.fb.group({
    email: [null, Validators.compose([ Validators.pattern('^[a-zA-Z_.+-]+@[a-zA-Z-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
    password: [null, Validators.compose([ Validators.minLength(6), Validators.maxLength(12), Validators.required])],
  });

  constructor(private fb: FormBuilder,
    private authService : AuthGuardService,
    private route :Router,) {

  }

    async login() {
      this.authService.signIn(this.loginForm.value.email, this.loginForm.value.password).then((success) => {
        console.log(success)
      }).catch((err) => {
        console.log(" error while " + err);
        alert(err);
      });
    }

  ngOnInit() {

  }
  }
