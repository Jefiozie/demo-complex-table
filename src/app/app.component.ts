import { Component } from "@angular/core";
import { TableComponent } from "./table/table.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [TableComponent],
  template: `<h1>demo</h1>
  <app-table />`,
  styles: [],
})
export class AppComponent {
  title = "demo-complex-table";
}
