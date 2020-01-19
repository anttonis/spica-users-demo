import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';
import { HttpClient, HttpParams, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class PresenceService {

  resource: string = 'presence'; 

  constructor(private http: HttpClient, private configService: ConfigService) { 
    //super(http, _configService);
  }

  getPresence(presenceDate: string): Observable<Employee[]>{

    //TODO - Use BaseService

    let url3 = '/timeapi/Presence';
    
    const httpOptions = {
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'SpicaToken '  + this.configService.getToken() 
      },
      params: {
        'TimeStamp': presenceDate,
        'OrgUnitID': '10000083',
        'showInactiveEmployees': 'false'
      }
    };

    return this.http.get<Employee[]>('/timeapi/Presence', httpOptions)
  }
}
