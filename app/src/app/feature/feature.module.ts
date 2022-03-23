import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { HomeComponent } from './home/home.component';
import { AsideComponent } from './aside/aside.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from '../app-routing.module';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { PostService } from './post.service';
import { UserService } from '../user/user.service';
import { ThemeService } from './theme.service';




@NgModule({
  declarations: [
  ThemeListComponent,
  ThemeListItemComponent,
  HomeComponent,
  AsideComponent,
  WelcomeComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ThemeListComponent,
    ThemeListItemComponent,
    AsideComponent,
    HomeComponent
  ],
  providers: [
    PostService,
    UserService,
    ThemeService
  ]
})
export class FeatureModule { }
