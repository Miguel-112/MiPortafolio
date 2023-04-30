import { Component } from '@angular/core';

interface sidenavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiPortafolio';

  isSideNavCollapse = false;
  screenWidth = 0;

  


  onToggleSideNav(data:sidenavToggle){

    this.screenWidth= data.screenWidth;
    this.isSideNavCollapse= data.collapsed;

  }
}
