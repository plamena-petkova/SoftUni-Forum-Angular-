import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { AsideComponent } from './aside/aside.component';
import { ThemeService } from './theme.service';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { PostService } from "./PostService";
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { UserRoutingModule } from './user/user-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ThemeListComponent,
    AsideComponent,
    ThemeListItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    UserRoutingModule
  ],
  providers: [ThemeService, PostService],
  bootstrap: [
    AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
