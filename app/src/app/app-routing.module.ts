
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { ThemeListItemComponent } from './feature/theme-list-item/theme-list-item.component';
import { ThemeListComponent } from './feature/theme-list/theme-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';




const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'themes',
    component: ThemeListComponent
  }

];

export const AppRoutingModule = RouterModule.forRoot(routes);
