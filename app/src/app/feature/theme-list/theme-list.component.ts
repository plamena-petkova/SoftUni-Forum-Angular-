import { Component, OnInit } from '@angular/core';
import { ITheme } from '../../core/interface';
import { ThemeService } from '../../feature/theme.service';


@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit {

  themeList: ITheme[] | undefined;


  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {

    this.themeService.loadThemeList().subscribe(themeList => {
      this.themeList = themeList;

    })
    
  }

}
