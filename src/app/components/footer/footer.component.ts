import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColorSchemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

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
      : '../assets/images/aboutus/aiClinic.svg';
  }
}
