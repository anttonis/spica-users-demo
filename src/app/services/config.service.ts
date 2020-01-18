import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class ConfigService {
  
    constructor() { }
  
    loggedIn() {
      return this.getToken() !== 'undefined';
    }
  
    getToken() {
      return localStorage.getItem('token')
    }
  
    saveToken(token: string) {
      localStorage.setItem('token', token);
    }

    getApiURL() {
      return localStorage.getItem('apiurl');
    }

    saveApiURL(apiurl: string) {
      localStorage.setItem('apiurl', apiurl)
    }
  }
  