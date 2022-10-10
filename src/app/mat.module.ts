import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

const matModules = [
  MatIconModule,
  MatExpansionModule,
  MatNativeDateModule,
  MatListModule,
];

@NgModule({
  imports: [matModules],
  exports: [matModules],
})
export class MatModule {}
