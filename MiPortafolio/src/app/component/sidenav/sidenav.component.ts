import { Component, Output, EventEmitter } from '@angular/core';
import { navbarData } from './nav-data';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { ProjectData } from './project-data';

import { lenguajesData } from './lenguajes-databases';
import { frameworksData } from './frameworks-database';
import { methodologiesData } from './methodologies-database';


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
  
  descripcionaboutme='Soy un desarrollador web full stack de Colombia que se especializa en entregar soluciones usando una amplia variedad de herramientas y lenguajes, incluyendo HTML, CSS, JavaScript,Bootstrap, Node.js, Nestjs, Angular,Laravel,Oracle,PL/SQL,Mysql,. Además, me considero una persona proactiva, dinámica y responsable que disfruta trabajar en equipo para ofrecer los mejores proyectos a los clientes. Como seguidor de las buenas prácticas y metodologías ágiles, siempre estoy buscando formas de mejorar mi trabajo y mantenerme actualizado con las últimas tecnologías. Soy un autodidacta apasionado y estoy siempre dispuesto a aprender y formarme en cualquier tecnología que pueda ayudarme a convertirme en un mejor desarrollador. Si estás buscando un desarrollador web que sea dedicado, responsable y esté comprometido con el éxito del proyecto, estoy seguro de que puedo cumplir con tus expectativas. ¡Estoy emocionado de trabajar contigo y ofrecer soluciones de alta calidad!  ';

  lenguajes='C++, C#, JavaScript, HTML5/CSS3,TypeScrip,PHP';
  Databases='Oracle, MySQL, PostgreSQL, SQL server, SQLite,';
  Framework='Angular,Node.js, Bootstrap, Nestjs, Android Studio,Laravel';
  Technologies='Git, Heroku, JIRA';
  DescripcionAbout='Estoy en busca de una oportunidad laboral que me permita combinar mis habilidades en Ingeniería de Software en un puesto desafiante, con el objetivo de obtener un desarrollo profesional significativo, experiencias interesantes y un crecimiento personal constante. Estoy emocionado de encontrar un trabajo que me permita aplicar mis habilidades técnicas y mi pasión por la tecnología, mientras colaboro con un equipo dinámico y motivado.';

  projects = ProjectData;


  public lineas = ["Ingeniero", "Entusiasta", "Desarrollador web"];


  navData = navbarData;

  lenguajesdabases = lenguajesData;
  frameworks= frameworksData;

  methodologies=methodologiesData;

  

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
