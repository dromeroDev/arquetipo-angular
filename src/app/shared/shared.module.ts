import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [CommonModule, RouterModule, NgbDropdownModule],
  exports: [NgbDropdownModule],
})
export class SharedModule {}
