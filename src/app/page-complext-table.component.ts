import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { DIRS } from "./table/table-complex.component";

@Component({
  standalone: true,
  imports: [CommonModule, DIRS],
  template: ` <h1>complex table</h1>
  <h2>simple</h2> 
    <app-table-complex 
      [data]="data"
    />
<h2>configurable</h2>
     <!-- Highly configured template with conditional elements -->
     <app-table-complex  [data]="data">
      <ng-template appTableHeader>
      <th>A</th>
        <th>B</th>
        <th>C</th>
      </ng-template>
      <ng-template [appTableRow]="data" let-row>
      <td>{{ row.a }}</td>
        <td>{{ row.b }}</td>
        <td>
          <button (click)="removeRow(row)">Delete</button>
        </td>
      </ng-template>
    </app-table-complex>

<h2>complext with structuale directives</h2>
      <app-table-complex [data]="data">
      <ng-template appTableHeader>
        <th>Item</th>
        <th>Price</th>
        <th></th>
        <th></th>
      </ng-template>
      <ng-container *appTableRow="data as row">
      <!-- <ng-container *appTableRow="data; let row"> -->
      <td>{{ row.a }}</td>
        <td>{{ row.b }}</td>
        <td>
          <button (click)="removeRow(row)">Delete</button>
        </td>
      </ng-container>
    </app-table-complex>
    `,
})
export default class PageComplexTable {
  data = [
    { a: "column 1", b: "data 1" },
    { a: "column 2", b: "data 2" },
    { a: "column 3", b: "data 3" },
  ];

  removeRow(row: any) {
    console.dir(row);
    const index = this.data.findIndex((r) => r === row);
    this.data.splice(index, 1);
  }
}
