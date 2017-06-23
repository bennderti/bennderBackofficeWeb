import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ValidacionUsuario } from './validacion-usuario'

@Injectable()
export class LoginService {
  
  constructor(private http: Http) { }

  validarUsuario(username: string, password: string): Observable<any>{

    let userRequest: any = { "usuario": username, "password": password };
    
    console.log(JSON.stringify(userRequest));
    console.log(userRequest);

    return this.http.post('http://localhost:8090/login', userRequest)
    .map((response: Response) => {
      let validacion = response.json();
      if (validacion && validacion.token ) {
        console.log(validacion);
        return validacion;
      }
    });
  }
 
}
