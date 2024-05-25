import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentViewerComponent } from './document-viewer.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    DocumentViewerComponent
  ],
  exports: [
    DocumentViewerComponent
  ],
  imports: [
    CommonModule,
    PdfViewerModule
  ]
})
export class DocumentViewerModule { }
