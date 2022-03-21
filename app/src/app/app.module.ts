import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';
import { UserModule } from './user/user.module';
import { PostService } from './user/post.service';
import { UserService } from './user/user.service';
import { ThemeService } from './user/theme.service';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    FeatureModule,
    UserModule
  ],
  providers: [PostService, UserService, ThemeService],
  bootstrap: [
    AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
