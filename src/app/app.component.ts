import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  cookieContent: string;
  localStorageContent: string;
  sessionStorageContent: string;

  constructor() {
    document.cookie = 'Cookie-Inhalt';
    localStorage.setItem('1', 'LocalStorage-Inhalt');
    sessionStorage.setItem('1', 'sessionStorage-Inhalt');

    this.cookieContent = document.cookie;
    this.localStorageContent = localStorage.getItem('1');
    this.sessionStorageContent = sessionStorage.getItem('1');

    console.log(this.cookieContent);
    console.log(this.localStorageContent);
    console.log(this.sessionStorageContent);
  }
}
