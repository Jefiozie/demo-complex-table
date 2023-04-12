import { CommonModule } from "@angular/common";
import {
  Component,
  ContentChild,
  Directive,
  Input,
  TemplateRef,
} from "@angular/core";

interface TableHeaderTemplateContext<TItem extends object> {
  $implicit: TItem[];
  appTableHeader: TItem[];
}

@Directive({
  selector: "ng-template[appTableHeader]",
  standalone: true,
})
export class TableHeaderTemplateDirective<TItem extends object> {
  @Input("appTableHeader") data!: TItem[] | "" | undefined;

  static ngTemplateContextGuard<TContextItem extends object>(
    dir: TableHeaderTemplateDirective<TContextItem>,
    ctx: unknown
  ): ctx is TableHeaderTemplateContext<TContextItem> {
    return true;
  }
}

interface TableRowTemplateContext<TItem extends object> {
  $implicit: TItem;
  appTableRow: TItem;
  index: number;
}

@Directive({
  selector: "ng-template[appTableRow]",
  standalone: true,
})
export class TableRowTemplateDirective<TItem extends object> {
  @Input("appTableRow") data!: TItem[];

  static ngTemplateContextGuard<TContextItem extends object>(
    dir: TableRowTemplateDirective<TContextItem>,
    ctx: unknown
  ): ctx is TableRowTemplateContext<TContextItem> {
    return true;
  }
}
@Component({
  selector: "app-table-complex",
  standalone: true,
  imports: [CommonModule],
  template: `
    <table>
      <thead>
        <tr>
          <ng-container
            *ngTemplateOutlet="
              headers || defaultHeaderTemplate;
              context: { $implicit: data, appTableHeader: data }
            "
          ></ng-container>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of data; index as i">
          <ng-container
            *ngTemplateOutlet="
              rows || defaultRowTemplate;
              context: { $implicit: row, appTableRow: row, index: i }
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
export class TableComplexComponent<TItem extends object> {
  @Input() data!: TItem[];

  @ContentChild(TableHeaderTemplateDirective, { read: TemplateRef })
  headers?: TemplateRef<TItem>;

  @ContentChild(TableRowTemplateDirective, { read: TemplateRef })
  rows?: TemplateRef<TItem>;
}

export const DIRS = [
  TableComplexComponent,
  TableHeaderTemplateDirective,
  TableRowTemplateDirective,
];
