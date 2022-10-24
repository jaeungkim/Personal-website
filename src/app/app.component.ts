import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { transition, style, animate, trigger } from '@angular/animations';
import { AuthService } from './services/auth/auth.service';
import { StorageService } from './services/storage/storage.service';
import { ColorSchemeService } from './services/theme/theme.service';
import { CookieService } from 'ngx-cookie-service';
import { v4 as uuidv4 } from 'uuid';

const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate(
    '1s ease-in',
    style({
      opacity: 1,
    })
  ),
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1,
  }),
  animate(
    '1s ease-out',
    style({
      opacity: 0,
    })
  ),
]);

const fadeIn = trigger('fadeIn', [enterTransition]);
const fadeOut = trigger('fadeOut', [leaveTrans]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeIn, fadeOut],
})
export class AppComponent implements OnInit, OnDestroy {
  public acceptCookie = false;
  public minimizedCookieBar = false;
  public showmoretext = false;
  cookieValue: string = '';
  viewed_cookie_policy: string = 'yes';
  non_necessary_cookie: boolean = false;
  selected: boolean = true;
  constructor(
    public colorSchemeService: ColorSchemeService,
    public _authService: AuthService,
    public router: Router,
    public cookieService: CookieService,
    public storageService: StorageService
  ) {
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
    if (this.viewed_cookie_policy === 'yes') {
      this.minimizedCookieBar = true;
    }
  }

  ngOnDestroy() {}

  // get isAdmin() {
  //   let is_admin = localStorage.getItem('is_admin');
  //   if (is_admin === 'on') {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  logoutUser() {
    this.storageService.clean();
    // localStorage.removeItem('token');
    // localStorage.removeItem('is_admin');
    this.router.navigate(['/login']);
    return true;
  }

  //REACAPTCHA
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
