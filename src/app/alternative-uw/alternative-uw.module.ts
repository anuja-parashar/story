import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlternativeUwRoutingModule } from './alternative-uw-routing.module';
import { AlternativeUwComponent } from './alternative-uw.component';
import { HeaderComponent } from './component/header/header.component';


@NgModule({
  declarations: [AlternativeUwComponent, HeaderComponent],
  imports: [
    CommonModule,
    AlternativeUwRoutingModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AlternativeUwModule { }
