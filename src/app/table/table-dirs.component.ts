import { CommonModule } from "@angular/common";
import { Component, ContentChild, Input, TemplateRef } from "@angular/core";

@Component({
  selector: "app-table-dirs",
  standalone: true,
  imports: [CommonModule],
  template: `
    <table>
      <thead>
        <tr>
          <ng-container
            *ngTemplateOutlet="
              headers || defaultHeaderTemplate;
              context: { $implicit: data }
            "
          ></ng-container>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of data">
          <ng-container
            *ngTemplateOutlet="
              rows || defaultRowTemplate;
              context: { $implicit: row }
            "
          ></ng-container>
        </tr>
      </tbody>
    </table>

    <!-- default templates -->
    <ng-template #defaultHeaderTemplate let-data>
      <th *ngFor="let header of data[0] | keyvalue">{{ header.key }}</th>
    </ng-template>

    <ng-template #defaultRowTemplate let-row>
      <td *ngFor="let row of row | keyvalue">{{ row.value }}</td>
    </ng-template>
  `,
  styles: [],
})
export default class TableWithDirsComponent {
  @Input() data!: any[];
  @ContentChild("headers") headers: TemplateRef<any> | undefined;
  @ContentChild("rows") rows: TemplateRef<any> | undefined;
}
