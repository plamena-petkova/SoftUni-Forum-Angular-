import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  
  @ViewChild('loginForm') form?: NgForm


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  loginHandler(): void {
    this.userService.login();
    this.router.navigate(['/home']);
  }

  ngAfterViewInit(): void {
   console.log(this.form);
  }

  onSubmit(): void {
    console.log(this.form!.value);
    this.form!.reset();
  }

}
