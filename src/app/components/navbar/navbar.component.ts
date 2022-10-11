import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ColorSchemeService } from '../../services/theme/theme.service';

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
  themeIconChange() {
    return this.colorSchemeService.currentActive() === 'dark'
      ? '../assets/images/aboutus/aiClinic.svg'
      : '../assets/images/aboutus/aiClinic-white.svg';
  }
}
