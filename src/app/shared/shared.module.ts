import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Bootstrap Modules
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";

import { NgbdModalConfirm } from "./modals/modal.confirm/modal.confirm";

// Pipes
import { RecortarPipe } from "./pipes/recortar";

@NgModule({
  declarations: [
    NgbdModalConfirm,
    RecortarPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule
  ],
  exports: [
    NgbdModalConfirm,
    NgbDropdownModule,
    RecortarPipe
  ],
})
export class SharedModule {}
