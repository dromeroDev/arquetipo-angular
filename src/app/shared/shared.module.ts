import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Bootstrap Modules
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";

// Pipes
import { RecortarPipe } from "./pipes/recortar";

@NgModule({
  declarations: [
    RecortarPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule
  ],
  exports: [
    NgbDropdownModule,
    RecortarPipe
  ],
})
export class SharedModule {}
