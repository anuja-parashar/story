import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastr:ToastrService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // local-side error
          errorMessage = `Error: ${error.error.message}`;
          console.log(error.error.message)
          // this.toastr.error(error.error.message);
          
        } else {
          // Server-side error
          // this.toastr.error(error.error.status, error.message);
          console.log(error.error.status, error.message)
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        // this.toastr.error(errorMessage);
        console.error(errorMessage);
        // handle specific error codes here 200 201
        // if (error.status === 404) {
        //   // Handle 404 Not Found error
        // }
        return throwError(errorMessage);
      })
    );
  }
}
