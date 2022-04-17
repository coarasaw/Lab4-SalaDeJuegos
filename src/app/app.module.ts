//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { SharedModule } from './page/shared/shared.module';

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { ErrorComponent } from './page/error/error.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { MenuPrincipalComponent } from './page/menu-principal/menu-principal.component';
import { PiePrincipalComponent } from './page/pie-principal/pie-principal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRecuperarClaveComponent } from './page/login-recuperar-clave/login-recuperar-clave.component';
import { LoginRegitrarComponent } from './page/login-regitrar/login-regitrar.component';
import { LoginVerificarCorreoComponent } from './page/login-verificar-correo/login-verificar-correo.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    QuienSoyComponent,
    MenuPrincipalComponent,
    PiePrincipalComponent,
    LoginRecuperarClaveComponent,
    LoginRegitrarComponent,
    LoginVerificarCorreoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
