import { Component } from "@angular/core";
import TableWithDirsComponent from "./table/table-dirs.component";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  imports: [CommonModule, TableWithDirsComponent],
  template: ` <h2>default table</h2>
    <app-table-dirs 
      [data]="data"
    />
    
    <h2>table with custom header and rows</h2>
    <app-table-dirs

      [data]="data"
    >
    <ng-template #headers>
        <th>A</th>
        <th>B</th>
        <th>C</th>
      </ng-template>
      <ng-template #rows let-row let-index>
        <td>{{ row.a }}</td>
        <td>{{ row.b }}</td>
        <td>
          <button (click)="removeRow(row, index)">Delete</button>
        </td>
      </ng-template>
    </app-table-dirs>

    `,
})
export default class PageAdvancedTable {
  data = [
    { a: "column 1", b: "data 1" },
    { a: "column 2", b: "data 2" },
    { a: "column 3", b: "data 3" },
  ];

  removeRow(row: any, index: number) {
    console.dir(row);
    console.error(index);
    this.data.splice(index, 1);
  }
}
