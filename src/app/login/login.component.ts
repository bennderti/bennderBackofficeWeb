import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { ValidacionUsuario } from './validacion-usuario';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  validacion: ValidacionUsuario;
  model: any = {};

  constructor(
    private loginService: LoginService, 
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  login() {
    this.loginService.validarUsuario(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.validacion = data;
          console.log("valiadcion: " + this.validacion);
          this.router.navigate(['/main-menu']);
        }
      )
  }

 
}
