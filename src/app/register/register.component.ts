import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../model/login.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private userService: UserService, private router: Router) {

  }
    registrationForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
  });

  login: Login = new Login()
  submitted = false;

  onSubmit() { 
    this.submitted = true
    this.userService.registerUser(this.login).subscribe(data => {
      console.log(data)
      this.router.navigate(['resources'])
    })
  }
}
