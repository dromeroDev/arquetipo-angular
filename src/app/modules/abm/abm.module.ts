import { RouterModule } from '@angular/router';
import { AbmRoutingModule } from './abm-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbmComponent } from './abm.component';

@NgModule({
  declarations: [AbmComponent],
  imports: [
    CommonModule,
    RouterModule,
    AbmRoutingModule,
  ]
})
export class AbmModule { }
