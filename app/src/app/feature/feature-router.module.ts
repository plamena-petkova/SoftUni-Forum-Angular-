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
  }

];

export const FeatureRouterModule = RouterModule.forChild(routes);


