import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-table",
  standalone: true,
  imports: [CommonModule],
  template: `
    <table>
      <thead>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>43</td>
        </tr>
        <tr>
          <td>Mary</td>
          <td>Moe</td>
          <td>38</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [],
})
export class TableComponent {}
