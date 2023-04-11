import { ApplicationConfig } from "@angular/core";
import {
  provideRouter
} from "@angular/router";
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
    path: "**",
    redirectTo: "simple-table",
  },
];
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)],
};
