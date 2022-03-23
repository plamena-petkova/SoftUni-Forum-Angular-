import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { PostService } from '../feature/post.service';
import { UserService } from './user.service';
import { ThemeService } from '../feature/theme.service';




@NgModule({
  declarations: [
    ProfileComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,

  ],

  providers: [
    PostService,
    UserService,
    ThemeService
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ]
})
export class UserModule { }
