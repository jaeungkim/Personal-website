import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ColorSchemeService } from './services/theme/theme.service';
import { CookieService } from 'ngx-cookie-service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
// export class AppComponent{}
export class AppComponent implements OnInit, OnDestroy {
  // activePath: string = '';
  // activeClassName: string = '';
  public acceptCookie = false;
  public minimizedCookieBar = false;
  cookieValue: string = '';
  viewed_cookie_policy: string = 'yes';
  constructor(
    private colorSchemeService: ColorSchemeService,
    public _authService: AuthService,
    private router: Router,
    public cookieService: CookieService
  ) {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     this.activePath = event.url.split('/')[1] || 'default';
    //     this.activeClassName = this.activePath + 'PageClass';
    //     console.log(this.activeClassName);
    //   }
    // });
    this.colorSchemeService.load();
    this.cookieValue = this.cookieService.get('X-Auth-Token');
    this.viewed_cookie_policy = this.cookieService.get('viewed_cookie_policy');
    // this.cookieService.set('X-Auth-Token', uuidv4());
    // this.cookieService.set('cookie-general-consent', 'false');
  
  }
  /*====================================COOKIE==========================================*/
  accpetCookie() {
    // this.acceptCookie = true;
    // this.minimizedCookieBar = true;
    this.cookieService.set('viewed_cookie_policy', 'yes');
    this.minimizedCookieBar = true;
    
  }
  minimizeCookie() {
    this.minimizedCookieBar = false;
  }
  /*====================================COOKIE==========================================*/
  ngOnInit() {
    if(this.viewed_cookie_policy === 'yes'){
      this.minimizedCookieBar = true;
    }

  }

  ngOnDestroy() {}

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
