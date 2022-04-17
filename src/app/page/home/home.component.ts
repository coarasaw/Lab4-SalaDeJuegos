import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email:string;
  
  constructor() { 
    this.obtener_localstorage();
  }

  ngOnInit(): void {
  }
  
  obtener_localstorage(){
    let datoUsuario = JSON.parse(localStorage.getItem('user'));
    console.log(datoUsuario);
    this.email = datoUsuario.email;
  }
}
