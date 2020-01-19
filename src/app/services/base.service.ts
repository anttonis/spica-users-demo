import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

    resource: string = '';

    constructor (private http: HttpClient, private configService: ConfigService) { }

    get<T>(): Observable<T> {
        return this.http.get<T>(this.getResourceURL(this.resource), this.getHttpOptions())
            .pipe(
                catchError(this.handleError)
            )
    }

    put<T>(object: T): Observable<T> {
        return this.http.put<T>(this.getResourceURL(this.resource), object, this.getHttpOptions())
            .pipe(
                catchError(this.handleError)
            )
    }

    private getResourceURL(resource: string) {
        var url: string = this.configService.getApiURL();
        if (url.substr(-1) === '/') {
            url = url.substr(0, url.length-1)
        }
        var uArr:String[] = url.split('/');
        return `/${uArr[uArr.length-1]}/${resource}`;
    }

    getHttpOptions() {
        return {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': 'SpicaToken ' + this.configService.getToken()
            })
        };
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          console.error('A client-side or network error occurred.', error.error.message);
        } else {
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      };
}
