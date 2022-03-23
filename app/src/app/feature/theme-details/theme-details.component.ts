import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost, ITheme } from 'src/app/core/interface';
import { UserService } from 'src/app/user/user.service';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.scss']
})
export class ThemeDetailsComponent implements OnInit {
  theme: ITheme<IPost>;

  canSubscribe: boolean = false;
  isLoggedIn: boolean = this.userService.isLogged;

  constructor(private activatedRoute: ActivatedRoute, 
    private themeService: ThemeService,
    private userService: UserService) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const themeId = params['themeId'];
      this.themeService.loadThemeById(themeId).subscribe(theme => {
        this.theme = theme;
        this.canSubscribe = !this.theme.subscribers.includes('5fa64b162183ce1728ff371d');
    });
    })
  }
}