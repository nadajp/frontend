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
  constructor(private userService: UserService, private router: Router) {

  }
    loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
  });

  login: Login = new Login()
  submitted = false;

  onSubmit() { 
    this.submitted = true
    this.userService.login(this.login).subscribe(data => {
      console.log(data)
      this.router.navigate(['resources'])
    })
  }
}
