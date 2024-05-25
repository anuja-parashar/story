import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
// import { MainModule } from './main/main.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptorService } from './services/loader-interceptor.service';
import { ExcelService } from './services/excel.service';

// import { NgxImageZoomModule } from 'ngx-image-zoom';
// import { Ng2PanZoomModule } from 'ng2-panzoom';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeService } from 'ng2-charts';
// import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
// import { ReportsAnalyticsComponent } from './reports-analytics/reports-analytics.component';

import { ToastrModule } from 'ngx-toastr';
import { ErrorInterceptor } from './interceptor/http-interceptor.interceptor';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'access' }
]

@NgModule({
  declarations: [
    LoaderComponent,
    AppComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    // MainModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    // NgxImageZoomModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    // Ng2PanZoomModule,
    
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    ThemeService,
    ExcelService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
