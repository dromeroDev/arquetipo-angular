import { RouterModule } from '@angular/router';
import { AbmRoutingModule } from './abm-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbmComponent } from './abm.component';
import { SharedModule } from "../../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { NgbPagination } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [AbmComponent, NgbPagination],
  imports: [
    CommonModule,
    RouterModule,
    AbmRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AbmModule { }
