import { RouterModule, Routes } from "@angular/router";
import { ThemeDetailsComponent } from "./theme-details/theme-details.component";
import { ThemeListComponent } from "./theme-list/theme-list.component";


const routes: Routes = [

  {
    path: 'themes',
    component: ThemeListComponent
  },
  {
    path: 'themes/:themeId',
    component: ThemeDetailsComponent
  },
  {
    path: 'theme/new',
    component: ThemeListComponent
  }

];

export const FeatureRouterModule = RouterModule.forChild(routes);


