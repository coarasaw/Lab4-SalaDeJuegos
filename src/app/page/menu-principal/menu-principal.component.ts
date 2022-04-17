import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  email:string;

  constructor(private rutas:Router) { 
    this.obtener_localstorage();
  }

  ngOnInit(): void {
  }

  quienSoy(){
    this.rutas.navigate(['quien-soy']);
  }
  inicio(){
    this.rutas.navigate(['home']);
  }
  logOut(){
    localStorage.removeItem('user')
    this.rutas.navigate(['login']);
  }
  sala(){
    this.rutas.navigate(['juegos']);
    
  }

  obtener_localstorage(){
    let datoUsuario = JSON.parse(localStorage.getItem('user'));
    console.log(datoUsuario);
    this.email = datoUsuario.email;
  }
}
