import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';
import { BaseService } from '../services/base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService extends BaseService {

  resource: string = 'employee';

  constructor(http: HttpClient, configService: ConfigService) { 
    super(http, configService);
  }

  getEmployees():Observable<Employee[]>{
    return this.get<Employee[]>();
    //return this.http.get<Employee[]>(this.getResourceURL(this.resource), this.getHttpOptions());
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.put<Employee>(employee);
  }
}
