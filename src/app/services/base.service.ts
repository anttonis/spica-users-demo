import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

    resource: string = '';

    constructor (private http: HttpClient, private configService: ConfigService) { }

    get<T>() {
        return this.http.get<T>(this.getResourceURL(this.resource), this.getHttpOptions());
    }

    put<T>(object: T) {
        return this.http.put<T>(this.getResourceURL(this.resource), object, this.getHttpOptions());
    }

    getResourceURL(resource: string) {
        var url: string = this.configService.getApiURL();
        if (url.substr(-1) === '/') {
            url = url.substr(0, url.length-1)
        }
        var uArr:String[] = url.split('/');
        return '/'+uArr[uArr.length-1]+'/'+resource;
    }

    getHttpOptions() {
        return {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': 'SpicaToken ' + this.configService.getToken()
            })
        };
    }

    testConnection(){
        var res = this.http.get<any>(this.getResourceURL('Unit1'), this.getHttpOptions());
    }
}
