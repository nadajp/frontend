import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../model/login.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}

  loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
  });

  login: Login = new Login()
  submitted = false;
  loginFailed = false

  onSubmit() { 
    this.submitted = true
    this.userService.login(this.loginForm.value).subscribe({
      next: (token) => {
        console.log(token)
        // cache token
        if (token !== null) {
          this.router.navigate(['resources'])
        } else {
          this.loginFailed = true
        }
      },
      error: (e) => {
        console.log('HTTP Error', e)
        this.loginFailed = true;
      }
    })
  }
}
