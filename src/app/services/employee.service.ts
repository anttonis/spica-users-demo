import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  spica_url: string = 'http://127.0.0.1:5000/employee';

  constructor(private http: HttpClient) { }

  getEmployees():Observable<Employee[]>{

    return this.http.get<Employee[]>(this.spica_url);

    // fetch('http://127.0.0.1:5000/employee')
    //   .then(result => result.json())
    //   .then(data => {
    //     // this.rowData = data
    //     return data
    //   })
  }
}
