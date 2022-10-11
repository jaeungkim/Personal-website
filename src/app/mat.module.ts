import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const matModules = [
  MatIconModule,
  MatExpansionModule,
  MatNativeDateModule,
  MatListModule,
  MatSlideToggleModule,
  MatSliderModule,
];

@NgModule({
  imports: [matModules],
  exports: [matModules],
})
export class MatModule {}
