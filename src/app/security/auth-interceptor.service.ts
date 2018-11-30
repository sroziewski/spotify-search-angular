import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { AuthService } from "./auth.service";
import { catchError } from "rxjs/operators";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    
    const authReq = req.clone({
      setHeaders: {
        Authorization: "Bearer " + this.auth.getToken()
      }
    });

    return next.handle(authReq).pipe(
      catchError((err, caught) => {

        if (err instanceof HttpErrorResponse && err.status == 401) {
          this.auth.authorize();
        }

        return throwError(new Error(err.error.error.message));
      })
    );
  }
}
