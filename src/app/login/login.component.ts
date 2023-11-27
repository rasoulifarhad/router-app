import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable, delay, of, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  message: string;
  isLoggedIn = false;

  constructor(public authService: AuthService) {
    this.message = '';
  }

  login2() : Observable<boolean> {
    return of(true)
            .pipe(
              delay(2500),
              tap( () => {
                this.message = '';
                this.isLoggedIn = true;
              })
            );
  }

  login(username: string, password: string) {
    this.message = '';
    if(!this.authService.login(username, password)) {
      this.message = 'Incorrect credentials';
      setTimeout(() =>  {
        this.isLoggedIn = true;
        this.message = '';
      }, 2500);
    }
    return false;
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    return false;
  }
}
