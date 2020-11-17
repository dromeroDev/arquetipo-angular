//import { SpinnerService } from '@core/services/spinner.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuService } from './menu/menu.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    MenuService,
  ]
})
export class CoreModule { }
