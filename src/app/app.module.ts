import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableHeadComponent } from './table-head/table-head.component';
import { TableFooterComponent } from './table-footer/table-footer.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { TableRowComponent } from './table-row/table-row.component';
import { TableCellComponent } from './table-cell/table-cell.component';
import { TableBodyRowComponent } from './table-body-row/table-body-row.component';
import { TableBodyCellComponent } from './table-body-cell/table-body-cell.component';
import { TableHeaderRowComponent } from './table-header-row/table-header-row.component';
import { TableHeaderCellComponent } from './table-header-cell/table-header-cell.component';
import { TableFooterCellComponent } from './table-footer-cell/table-footer-cell.component';
import { TableFooterRowComponent } from './table-footer-row/table-footer-row.component';
import { PlantListComponent } from './plant-list/plant-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableHeadComponent,
    TableFooterComponent,
    TableHeaderComponent,
    TableBodyComponent,
    TableRowComponent,
    TableCellComponent,
    TableBodyRowComponent,
    TableBodyCellComponent,
    TableHeaderRowComponent,
    TableHeaderCellComponent,
    TableFooterCellComponent,
    TableFooterRowComponent,
    PlantListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
