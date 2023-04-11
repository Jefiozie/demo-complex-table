import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: ` <ul>
      <li><a routerLink="simple-table">Simple</a></li>
      <li><a routerLink="advanced-table">advanced</a></li>
    </ul>
    <router-outlet></router-outlet>`,
  styles: [],
})
export class AppComponent {}
