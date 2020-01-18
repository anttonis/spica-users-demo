import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {
  save_button_text: string;
  token: string;
  apiurl: string;

  constructor(private configService: ConfigService, 
    private authService: AuthService, private router: Router) { }

  ngOnInit() {
    // 'http://rdweb.spica.com:5213/timeapi/employee'
    let tok: string = this.configService.getToken();
    console.log(tok)
    if (tok !== 'undefined') {
      this.token = tok
    }

    let url: string = this.configService.getApiURL();
    console.log(url);
    if (url !== 'undefined') {
      this.apiurl = url
    }

    if (this.authService.loggedIn()) {
      this.save_button_text = 'Save';
    } else {
      this.save_button_text = 'Login';
    }
  }  

  onSaveSettings() {
    this.configService.saveApiURL(this.apiurl);
    this.configService.saveToken(this.token);

    if (this.save_button_text === 'Save') {
      this.router.navigate(['/settings'])
    } else if (this.authService.loggedIn()) {
      this.router.navigate(['/users'])
    }
  }
}
