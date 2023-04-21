import { ApplicationConfig } from "@angular/core";
import {
  provideRouter
} from "@angular/router";
import { provideAnimations } from '@angular/platform-browser/animations';
const appRoutes = [
  {
    path: "simple-table",
    loadComponent: () => import("./page-simple-table.component"),
  },
  {
    path: "advanced-table",
    loadComponent: () => import("./page-advanced-table.component"),
  },
  {
    path: "complex-table",
    loadComponent: () => import("./page-complext-table.component"),
  },
  {
    path: "**",
    redirectTo: "simple-table",
  },
];
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), provideAnimations()],
};
