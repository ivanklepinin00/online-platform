import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date.component';

@NgModule({
  declarations: [DateComponent],
  imports: [CommonModule, MatDatepickerModule],
  exports: [DateComponent],
})
export class DateModule {}
