import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EditComponent } from "./edit/edit.component";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  {
    path: "",
    component: ListComponent,
  },
  {
    path: "edit",
    component: EditComponent,
  },
  // Not found
  { path: "**", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbmRoutingModule {}
