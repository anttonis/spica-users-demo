import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router) { 

  }

  canActivate(): boolean {
    if (this._authService.loggedIn()) {
      console.log('loggedIn:true')
      return true
    } else {
      console.log('loggedIn:false')
      this._router.navigate(['/'])
      return false
    }
  }
  
}
