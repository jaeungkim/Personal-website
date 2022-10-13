import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private router: Router, private storageService: StorageService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.storageService.isLoggedIn()){
        return true;
      }else{
        this.router.navigate(['/login']);
        return false;
      }
  }
}