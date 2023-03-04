import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { PersonasService } from '../services/personas.service';

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = '';
  password: any = '';
  usuariosServicio: any;
  listadoUsuarios: any = [];
  copiaUsuarios: any = [];

  credencialVacia: boolean = true;

  @ViewChild('modalValidacionLogin') modalValidacionLogin: ElementRef;
  constructor(public router: Router, modalValidacionLogin: ElementRef, private personasService: PersonasService){
    this.modalValidacionLogin = modalValidacionLogin;
  }

  ngOnInit(): void {

  }

  obtenerUsuarios(): any{
    this.personasService.obtenerPersonas()
    .subscribe(
      (usuarios => {
        this.usuariosServicio = usuarios;
        this.usuariosServicio.data.forEach((data: any) => {
          this.listadoUsuarios.push({
            id: {value: data.id },
            email: {value: data.email },
            first_name: {value: data.first_name}
          })
        })
        let copiaUsuarios = {... this.listadoUsuarios};
        this.copiaUsuarios.push(copiaUsuarios);
      })
    )
    return this.copiaUsuarios;
  }

  verficacionPass(){
    this.personasService.obtenerPersonas()
    .subscribe(
      (usuarios => {
        this.usuariosServicio = usuarios;
        let contarRegistro = 0;
        this.usuariosServicio.data.forEach((data: any) => {

          let password = data.first_name;
          let passFormateada = password.toLocaleLowerCase().replace(/\s/g, '');
          let myPassword = this.password;
          let miUsuario = this.user;
          let usuario = data.email;

          switch(true){
            case (miUsuario === usuario && myPassword === passFormateada):
              localStorage.setItem('currentUser', 'true');
              this.router.navigate(['/principal']);
              this.credencialVacia = false;
            break;
            case (myPassword !== passFormateada && myPassword !== ''):
              this.credencialVacia = false;
              $(this.modalValidacionLogin.nativeElement).modal('show');
            break;
            case (myPassword === ''):
              this.credencialVacia = true;
              $(this.modalValidacionLogin.nativeElement).modal('show');
              break;
            default:
              $(this.modalValidacionLogin.nativeElement).modal('show');
          }
          contarRegistro++;
        })
      })
    )
  }

  cerrarModal(){
    $(this.modalValidacionLogin.nativeElement).modal('hide');
  }

}
