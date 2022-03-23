import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from '../user/user.service';
import { ThemeService } from '../feature/theme.service';
import { PostService } from '../feature/post.service';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
  HeaderComponent,
  FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: []
})

export class CoreModule { 
  static forRoot(): ModuleWithProviders<CommonModule> {
    return {
      ngModule: CoreModule,
    providers: [
      UserService,
      ThemeService,
      PostService
    ]
  }

    } 
}
