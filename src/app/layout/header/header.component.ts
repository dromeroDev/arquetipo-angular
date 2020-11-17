import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { Router } from '@angular/router';

import { MenuService } from '../../core/menu/menu.service';
//import { Screenfull } from 'screenfull';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    toogleMenu(){
        const element = document.getElementById("sidebar-wrapper");
        element.classList.toggle("toggled");
    }
    toogleOffside(){
        const element = document.getElementById("offsidebar-wrapper");
        element.classList.toggle("toggled");
    }
}