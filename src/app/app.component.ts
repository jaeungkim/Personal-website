import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// export class AppComponent{}
export class AppComponent {
  activePath: string = '';
  activeClassName: string = '';

  constructor(public _authService: AuthService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activePath = event.url.split('/')[1] || 'default';
        this.activeClassName = this.activePath + 'PageClass';
        console.log(this.activeClassName);
      }
    });
  }

  ngOnInit() {}

  get isAdmin() {
    let is_admin = localStorage.getItem('is_admin');
    if (is_admin === 'on') {
      return true;
    } else {
      return false;
    }
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('is_admin');
    this.router.navigate(['/login']);
    return true;
  }

  //REACAPTCHA
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
