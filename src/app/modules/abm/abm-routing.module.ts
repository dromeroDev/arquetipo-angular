import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbmComponent } from './abm.component';
import { EditComponent } from './components/edit/edit.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {
    path: '',
    component: TableComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  // Not found
  { path: '**', redirectTo: 'home' }
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