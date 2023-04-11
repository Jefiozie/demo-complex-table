import { Component } from "@angular/core";
import TableWithNgForAndEmptyStateComponent from "./table/table.component";

@Component({
  standalone: true,
  imports: [TableWithNgForAndEmptyStateComponent],
  template: ` <h2>emtpy table</h2>
    <app-table-ngfor-empty-state />
    
    <h2>table with data</h2>
    <app-table-ngfor-empty-state
      [columns]="['column 1', 'column 2']"
      [rows]="['row 1', 'row 2']" 
      />`,
})
export default class PageSimpleTable {}