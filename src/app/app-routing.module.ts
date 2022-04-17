import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './page/error/error.component';
import { HomeComponent } from './page/home/home.component';
import { MenuJuegosComponent } from './page/juegos/menu-juegos/menu-juegos.component';
import { LoginRecuperarClaveComponent } from './page/login-recuperar-clave/login-recuperar-clave.component';
import { LoginRegitrarComponent } from './page/login-regitrar/login-regitrar.component';
import { LoginComponent } from './page/login/login.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'recuperar-clave',component:LoginRecuperarClaveComponent},
  {path:'registar',component:LoginRegitrarComponent},
  {path:'juegos' ,component:MenuJuegosComponent },
  {path:'quien-soy',component:QuienSoyComponent},
  {path:'error',component:ErrorComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
