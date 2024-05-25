import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { CircularGraphModule } from '../../../../helper/circular-graph/circular-graph.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    CircularGraphModule,
    MatIconModule,
    DetailsRoutingModule
  ]
})
export class DetailsModule { }
