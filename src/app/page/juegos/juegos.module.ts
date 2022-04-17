import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegosRoutingModule } from './juegos-routing.module';

import { MenuJuegosComponent } from './menu-juegos/menu-juegos.component';
import { MenuPrincipalComponent } from '../menu-principal/menu-principal.component';

@NgModule({
  declarations: [
    MenuJuegosComponent,
    MenuPrincipalComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule
  ]
})
export class JuegosModule { }
