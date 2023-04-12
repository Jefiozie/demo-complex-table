import { Component } from "@angular/core";
import TableWithDirsComponent from "./table/table-dirs.component";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  imports: [CommonModule, TableWithDirsComponent],
  template: ` <h1>default table</h1>
  <h2>simple</h2>
    <app-table-dirs 
      [data]="data"
    />
    <h2>configurable</h2>

    <app-table-dirs

      [data]="data"
    >
    <ng-template #headers>
        <th>A</th>
        <th>B</th>
        <th>C</th>
        <th>sort</th>
      </ng-template>
      <ng-template #rows let-row let-index>
        <td>{{ row.a }}</td>
        <td>{{ row.b }}</td>
        <td>
          <button (click)="removeRow(row)">Delete</button>
        </td>
        <td>
          <button (click)="sortData()">sort</button>
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

  // make a new array with the same data but in reverse order but add a new row
  sortData() {
    this.data = [...this.data.reverse(), { a: "column 4", b: "data 4" }];
  }

  removeRow(row: any) {
    console.dir(row);
    const index = this.data.findIndex((r) => r === row);
    this.data.splice(index, 1);
  }
}
