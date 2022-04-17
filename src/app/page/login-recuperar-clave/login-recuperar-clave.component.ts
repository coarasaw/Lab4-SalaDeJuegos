import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-recuperar-clave',
  templateUrl: './login-recuperar-clave.component.html',
  styleUrls: ['./login-recuperar-clave.component.css']
})
export class LoginRecuperarClaveComponent implements OnInit {
  recuperarForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.recuperarForm = this.fb.group({
      usuarioCorreo: ['',[Validators.required,Validators.email]]
    })
  }

  ngOnInit(): void {
  }

  recuperarClave(){
    
  }
}
