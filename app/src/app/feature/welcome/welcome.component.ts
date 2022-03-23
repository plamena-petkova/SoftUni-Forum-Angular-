import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  isLoggedIn: boolean = this.userService.isLogged;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
