import { Component, Output, EventEmitter } from '@angular/core';
import { navbarData } from './nav-data';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';


interface sidenavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms',

        style({opacity:1})
        )
       
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('350ms',

        style({opacity:0})
        )
       
      ])

    ]),

    trigger('rotate',[
      transition(':enter',[

        animate('1000ms',

         keyframes([
          style({transform: 'rotate(0deg)',offset:'0' }),
          style({transform: 'rotate(2turn)',offset:'1' }),
         ])
        )

      ])
    ])
    
  ]

})
export class SidenavComponent {
  @Output() onToggleSideNav: EventEmitter<sidenavToggle> = new EventEmitter();

  collapsed = false;
  screenWidth = 0;

  navData = navbarData;

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth:this.screenWidth});
  }

  closeSidenav() {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth:this.screenWidth});
  }
}
