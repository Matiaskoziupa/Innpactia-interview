import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-publico',
  templateUrl: './publico.component.html',
  styleUrls: ['./publico.component.css']
})
export class PublicoComponent {
  constructor(public auth: AuthService){}
  loginWithRedirect(){
    this.auth.loginWithRedirect()
  }
  logOut(){
    this.auth.logout()
  }
}
