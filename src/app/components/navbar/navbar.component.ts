import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ColorSchemeService } from '../../services/color-scheme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public isitdarkmode: boolean = false;
  constructor(
    public colorSchemeService: ColorSchemeService,
    public router: Router
  ) {
    this.colorSchemeService.load();
  }
  // ngOnInit(): void {
  //   if (this.colorSchemeService.colorScheme === 'dark') {
  //     this.isitdarkmode = !this.isitdarkmode;
  //   }
  //   this.isitdarkmode = !this.isitdarkmode;
  //   console.log(this.isitdarkmode)
  // }
  themeIconChange() {
    return this.colorSchemeService.currentActive() === 'dark'
      ? '../assets/images/aboutus/aiClinic.svg'
      :  '../assets/images/aboutus/aiClinic-white.svg';
  }
}
