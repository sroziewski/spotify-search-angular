import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const authReq = req.clone({
      setHeaders: {
        Authorization: "Bearer "+this.auth.getToken()
      }
    })
    return next.handle(authReq).pipe(

      catchError((err, caught)=>{

        if(err instanceof HttpErrorResponse && err.status == 401){
          this.auth.authorize();
        }

        return throwError(new Error(err.error.error.message));
      }
    )

      )
  }
  
  

  constructor(private auth: AuthService) { }
}
