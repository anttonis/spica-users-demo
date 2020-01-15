import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  token: string;
  apiurl: string;

  constructor() { }

  ngOnInit() {
    // 'http://rdweb.spica.com:5213/timeapi/employee'
    let tok: string = localStorage.getItem('token')
    if (tok !== 'undefined') {
      this.token = tok
    }

    let url: string = localStorage.getItem('apiurl')
    if (url !== 'undefined') {
      this.apiurl = url
    }
    
  }

  onSaveToken() {
    localStorage.setItem('token', this.token)
    localStorage.setItem('apiurl', this.apiurl)
  }

}
