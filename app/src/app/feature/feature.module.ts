import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { HomeComponent } from './home/home.component';
import { AsideComponent } from './aside/aside.component';




@NgModule({
  declarations: [
  ThemeListComponent,
  ThemeListItemComponent,
  HomeComponent,
  AsideComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ThemeListComponent,
    ThemeListItemComponent,
    AsideComponent,
    HomeComponent
  ]
})
export class FeatureModule { }
