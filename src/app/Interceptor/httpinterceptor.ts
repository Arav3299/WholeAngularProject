import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { LoaderService } from '../loader/loader.service';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private loader: LoaderService) {
  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    this.loader.show();
    const Arav = "Hemnath";
     return next.handle(req.clone({setHeaders:{Arav}}))
     .pipe(delay(3000),finalize(() => this.loader.hide()));
  }
}
