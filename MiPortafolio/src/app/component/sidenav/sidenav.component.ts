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
  descripciontitulo='Soy un autodidacta con gran capacidad de aprendizaje y una pasión por la programación. Me encanta enfrentarme a problemas complejos y desafiantes del mundo real, ya que mi mente curiosa siempre está buscando soluciones innovadoras. Además, tengo un gran compromiso con la mejora continua, lo que me impulsa a seguir aprendiendo y perfeccionando mis habilidades como programador.';
  public lineas = ["Ingeniero", "Entusiasta", "Desarrollador web"];


  navData = navbarData;

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth:this.screenWidth});
  }

  ngOnInit() {
  
 
    this.mostrarSiguienteLinea();
    }

  closeSidenav() {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth:this.screenWidth});
  }




  public mostrarSiguienteLinea = () => {
    const contenedor = document.getElementById("contenedor") as HTMLSpanElement;
    let i = 0;
    const mostrarLinea = () => {
      const lineaActual = this.lineas[i];
      for (let j = lineaActual.length; j >= 0; j--) {
        setTimeout(() => {
          contenedor.textContent = lineaActual.slice(0, j);
        }, (lineaActual.length - j) * 50);
      }
      i++;
      if (i >= this.lineas.length) {
        i = 0;
      }
      setTimeout(() => {
        const siguienteLinea = this.lineas[i];
        contenedor.textContent = siguienteLinea;
        contenedor.style.borderRight = "1px solid transparent";
        setTimeout(() => {
          contenedor.style.borderRight = "1px solid white";
        }, 500);
      }, lineaActual.length * 50 + 150);
      setTimeout(mostrarLinea, (lineaActual.length + 1) * 50 + 2850);
    };
    mostrarLinea();
  }
  
  
  
}
