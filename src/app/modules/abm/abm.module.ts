import { RouterModule } from "@angular/router";
import { AbmRoutingModule } from "./abm-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AbmComponent } from "./abm.component";
import { SharedModule } from "../../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { EditComponent } from "./edit/edit.component";
import { ListComponent } from "./list/list.component";

@NgModule({
  declarations: [AbmComponent, EditComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgbPaginationModule,
    FormsModule,
    AbmRoutingModule,
  ],
})
export class AbmModule {}
