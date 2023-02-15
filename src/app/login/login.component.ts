import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = '';
  password = '';
  @ViewChild('modalValidacionLogin') modalValidacionLogin: ElementRef;
  constructor(public router: Router, modalValidacionLogin:ElementRef){
    this.modalValidacionLogin = modalValidacionLogin;
  }

  ngOnInit(): void {
  }

  estadoVisible = "visible";
  verficacionPass(){
    const password: string = "MyPassword";

    let user: string = this.user;
    let myPassword: string = this.password;

    if (myPassword == password){
      localStorage.setItem('currentUser', 'true');
      this.router.navigate(['/principal']);
    } else {
      $(this.modalValidacionLogin.nativeElement).modal('show');
    }
  }

  cerrarModal(){
    $(this.modalValidacionLogin.nativeElement).modal('hide');
  }

}
