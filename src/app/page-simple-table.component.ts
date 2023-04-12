import { Component } from "@angular/core";
import TableWithNgForAndEmptyStateComponent from "./table/table.component";

@Component({
  standalone: true,
  imports: [TableWithNgForAndEmptyStateComponent],
  template: ` <h1>table</h1>
    <h2>simple</h2>
    <app-table-ngfor-empty-state
      [columns]="columns"
      [rows]="data" 
      />

    <h2>without sort</h2>
    <app-table-ngfor-empty-state
      [columns]="columns"
      [rows]="data" 
      [withSort]="false"
      />`,
})
export default class PageSimpleTable {
  columns = ["column 1", "column 2"];
  data = [
    { a: "column 1", b: "data 1" },
    { a: "column 2", b: "data 2" },
    { a: "column 3", b: "data 3" },
  ];
}
