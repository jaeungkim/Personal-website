import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{}

// export class AppComponent {
//   name = 'Angular';

//   constructor(public _authService: AuthService, private router: Router){}

//   ngOnInit(){
  
//   }

//   get isAdmin(){
//     let is_admin = localStorage.getItem('is_admin');
//     if(is_admin === 'on'){
//       return true;
//     }else{
//       return false;
//     }
//   }

//   logoutUser(){
//     localStorage.removeItem('token');
//     localStorage.removeItem('is_admin');
//     this.router.navigate(['/login']);
//     return true;
//   }

// }