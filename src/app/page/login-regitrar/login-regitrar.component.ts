import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-login-regitrar',
  templateUrl: './login-regitrar.component.html',
  styleUrls: ['./login-regitrar.component.css']
})
export class LoginRegitrarComponent implements OnInit {
  registrarForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder,
              private afAuth : AngularFireAuth,
              private router: Router,
              private toastr: ToastrService,
              private _errorService: ErrorService) {
    this.registrarForm = this.fb.group({
      usuario: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      repetirPassword: ['']
    }, { validator: this.ckeckPassword})
   }

  ngOnInit(): void {
  }

  registar(){
    const usuario = this.registrarForm.get('usuario')?.value;
    const password = this.registrarForm.get('password')?.value;
    this.loading = true;
    this.afAuth.createUserWithEmailAndPassword(usuario,password).then(rta => {
      this.toastr.success('El usuario fue registrado con exito!', 'Usuario registrado!');
      this.router.navigate(['/home'])
    }).catch(error => {
      this.registrarForm.reset();
      this.loading = false;
      this.toastr.error(this._errorService.error(error.code),'Error');
    })
  }

  // error(code: string):string{
  //   switch(code){
  //     // Email ya registrado
  //     case 'auth/email-already-in-use':
  //       return 'El Correo ya esta registrado'

  //     // Correo invalido
  //     case 'auth/invalid-email':
  //       return 'El Correo es invalido'

  //     // La Contraseña es muy debil
  //     case 'auth/weak-password':
  //       return 'La Contraseña es muy debil'

  //     default:
  //       return 'Error desconocido';
  //   }

  // }

  ckeckPassword(group: FormGroup): any {
    const pass = group.controls.password?.value;
    const confirmarPassword = group.controls.repetirPassword?.value;
    return pass === confirmarPassword ? null : { notSame: true }
  }
}
