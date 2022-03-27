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
import { PostService } from './feature/post.service';
import { UserService } from './user/user.service';
import { ThemeService } from './feature/theme.service';
import { FeatureRouterModule } from './feature/feature-router.module';
import { ThemeDetailsComponent } from './feature/theme-details/theme-details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ThemeDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule.forRoot(),
    FeatureModule,
    UserModule,
    FeatureRouterModule,
    FormsModule
    
  ],
  providers: [PostService, UserService, ThemeService],
  bootstrap: [
    AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
