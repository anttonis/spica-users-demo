import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private configService: ConfigService) { }

  loggedIn() {
    let tok:string = this.configService.getToken();
    let url:string = this.configService.getApiURL();
    return this.validate(tok) && this.validate(url)
  }

  validate(value: string) {
    return (value !== 'undefined') && (value !== null) && (value !== '')
  }
}
