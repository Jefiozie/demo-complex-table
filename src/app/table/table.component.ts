import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-table-ngfor-empty-state",
  standalone: true,
  imports: [CommonModule],
  template: `
    <table>
      <thead>
        <th *ngFor="let column of columns">{{ column }}</th>
        <th *ngIf="withSort">sort</th>
      </thead>
      <tbody>
        <tr *ngFor="let row of rows">
          <td>{{ row.a }}</td>
          <td>{{ row.b }}</td>
          <td *ngIf="withSort">
            <button (click)="sortData()">sort</button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [],
})
export default class TableWithNgForAndEmptyStateComponent<
  T extends { a: string; b: string }
> {
  @Input() columns: string[] = [];
  @Input() rows: T[] = [];
  @Input() withSort = true;

  sortData() {
    this.rows = [...this.rows.reverse()];
  }
}
