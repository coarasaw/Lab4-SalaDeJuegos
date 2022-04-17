import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-juegos',
  templateUrl: './menu-juegos.component.html',
  styleUrls: ['./menu-juegos.component.css']
})
export class MenuJuegosComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }
   
  Juego(tipo: string) {
    switch (tipo) {
      case 'Ahorcado':
        this.router.navigate(['/Juegos/Ahorcado']);
        break;
      case 'Agilidad':
        this.router.navigate(['/Juegos/Agilidad']);
        break;
      /* case 'AgilidadaMasListado':
        this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break; */
      case 'MayorOMenor':
        this.router.navigate(['/Juegos/MayorOMenor']);
        break;
      case 'Preguntados':
        this.router.navigate(['/Juegos/Preguntados']);
        break;
    }
  }
    
}
