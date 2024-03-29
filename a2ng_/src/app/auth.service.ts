import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  url: string = `http://localhost:3000/login/`;
  res: any;

  constructor(private http: HttpClient) {}

  login(user: User) {
    // POST Request
    return this.http.post(this.url, user, { observe: 'response' });
  }

  logout() {
    // clear cookie
    localStorage.clear();
  }

  IsLoggedIn(): boolean {
    let user = localStorage.getItem('IsLoggedIn');
    if (user != null) {
      return true;
    } else return false;
  }

  getUserEmail(): string {
    let user = localStorage.getItem('IsLoggedIn');
    if (user != null) {
      let Email = JSON.parse(user);
      return Email.email;
    } else {
      return '';
    }
  }
}
