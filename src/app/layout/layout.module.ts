import { NgModule } from "@angular/core";

import { LayoutComponent } from "./layout.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { OffsidebarComponent } from "./offsidebar/offsidebar.component";
import { FooterComponent } from "./footer/footer.component";

import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [SharedModule, RouterModule],
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    OffsidebarComponent,
    FooterComponent,
  ],
  exports: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    OffsidebarComponent,
    FooterComponent,
  ],
})
export class LayoutModule {}
