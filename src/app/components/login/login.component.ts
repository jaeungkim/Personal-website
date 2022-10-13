import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StorageService } from '../../services/storage/storage.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginUserData: any = { username: '', password: '' };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  loginForm: FormGroup;
  //TEMPORARY
  allowedUsername:any = 'Tristin';
  allowedPassword:any = '123';
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private storageService: StorageService) {
    this.createForm();
  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(FormData) {
    //===================TEMPORARY
    if (
      FormData.username == this.allowedUsername &&
      FormData.password == this.allowedPassword
    ) {
      // localStorage.setItem('token', 'secretToken');
      // localStorage.setItem('is_admin', 'true');
      this.storageService.saveUser({FormData});
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
      this.router.navigate(['/']);
    } else {
      alert("wrong credentials");
    }
    //===================TEMPORARY

    // this.authService.login(FormData.username, FormData.password).subscribe({
    //   next: data => {
    //     this.storageService.saveUser(data);

    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.roles = this.storageService.getUser().roles;
    //     this.reloadPage();
    //   },
    //   error: err => {
    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    // });

  }

  // reloadPage(): void {
  //   window.location.reload();
  // }
}