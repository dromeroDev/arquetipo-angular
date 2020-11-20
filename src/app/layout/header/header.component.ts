import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  toogleMenu() {
    const element = document.getElementById("sidebar-wrapper");
    element.classList.toggle("toggled");
  }
  toogleOffside() {
    const element = document.getElementById("offsidebar-wrapper");
    element.classList.toggle("toggled");
  }
  showNotification() {}
}
