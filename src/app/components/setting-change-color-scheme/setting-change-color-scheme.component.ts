import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ColorSchemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-setting-change-color-scheme',
  templateUrl: './setting-change-color-scheme.component.html',
  styleUrls: ['./setting-change-color-scheme.component.scss'],
})
export class SettingChangeColorSchemeComponent {
  public currentThemeDark: boolean = true;

  constructor(public colorSchemeService: ColorSchemeService) {
    this.colorSchemeService.load();
  }
  ngOnInit() {
  }
  setTheme() {
    if (this.currentThemeDark) {
      this.colorSchemeService.update('light');
    }
    if (!this.currentThemeDark) {
      this.colorSchemeService.update('dark');
    }
    this.currentThemeDark = !this.currentThemeDark;
  }
}
