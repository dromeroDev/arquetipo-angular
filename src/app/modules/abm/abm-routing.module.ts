import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbmComponent } from './abm.component';

const routes: Routes = [
  {
    path: '',
    component: AbmComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AbmRoutingModule {}