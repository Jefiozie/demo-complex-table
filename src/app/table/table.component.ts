import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-table-ngfor-empty-state",
  standalone: true,
  imports: [CommonModule],
  template: `
    <table *ngIf="rows.length > 0; else emptyState">
      <thead>
        <th *ngFor="let column of columns">{{ column }}</th>
      </thead>
      <tbody>
        <tr>
          <td *ngFor="let row of rows">{{ row }}</td>
        </tr>
      </tbody>
    </table>
    <ng-template #emptyState>
      <p>no data</p>
    </ng-template>
  `,
  styles: [],
})
export class TableWithNgForAndEmptyStateComponent {
  @Input() columns: string[] = [];
  @Input() rows: string[] = [];
}
