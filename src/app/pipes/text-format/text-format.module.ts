import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFormatPipe } from './text-format.pipe';


@NgModule({
  declarations: [TextFormatPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TextFormatPipe
  ],
})
export class TextFormatModule { }
