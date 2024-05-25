import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppicationRoutingModule } from './appication-routing.module';
import { AppicationComponent } from './appication.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CircularGraphModule } from '../../../helper/circular-graph/circular-graph.module';
import { MatNativeDateModule } from '@angular/material/core';
//material modules
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { LoaderService } from 'src/app/services/loader.service';

@NgModule({
  declarations: [AppicationComponent],
  imports: [
    CommonModule,
    AppicationRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
    MatButtonModule,
    MatTooltipModule,
    CircularGraphModule,
    MatChipsModule,
    MatInputModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  providers:[
    LoaderService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppicationModule { }
