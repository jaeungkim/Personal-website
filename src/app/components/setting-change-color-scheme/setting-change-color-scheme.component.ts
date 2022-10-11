import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ColorSchemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-setting-change-color-scheme',
  templateUrl: './setting-change-color-scheme.component.html',
  styleUrls: ['./setting-change-color-scheme.component.scss'],
})
export class SettingChangeColorSchemeComponent {
  public currentThemeDark: boolean = true;
  public icon: any;

  constructor(public colorSchemeService: ColorSchemeService) {
    this.colorSchemeService.load();
  }
  ngOnInit() {
    this.icon = this.colorSchemeService.currentActiveIcon();
  }
  setTheme() {
    if (this.currentThemeDark) {
      this.colorSchemeService.update('light');
      this.icon = this.colorSchemeService.currentActiveIcon();
    }
    if (!this.currentThemeDark) {
      this.colorSchemeService.update('dark');
      this.icon = this.colorSchemeService.currentActiveIcon();
    }
    this.currentThemeDark = !this.currentThemeDark;
  }
}
