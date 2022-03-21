import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { LoginGuard } from './user/login.guard';
import { ThemeListComponent } from './feature/theme-list/theme-list.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'themes',
    canActivate: [LoginGuard],
    component: ThemeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
