import { RouterModule } from '@angular/router';
import { AbmRoutingModule } from './abm-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbmComponent } from './abm.component';
import { SharedModule } from "../../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { NgbPagination } from "@ng-bootstrap/ng-bootstrap";
import { EditComponent } from './components/edit/edit.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [AbmComponent, NgbPagination, EditComponent, TableComponent],
  imports: [
    CommonModule,
    RouterModule,
    AbmRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AbmModule { }
