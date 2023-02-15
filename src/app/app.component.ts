import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'First Angular App';
  // login = JSON.parse(localStorage.getItem('currentUser'));
  login = JSON.parse(localStorage.getItem('currentUser') || 'false');

  constructor(public router: Router){
  }

  getName(): void{

  }

  ngOnInit():void{
    if (this.login == false) {
      this.login = true;
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/principal']);
    }
  }
}
