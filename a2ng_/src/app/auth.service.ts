import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = `http://localhost:3000/login/`;

  constructor(private http: HttpClient) {}

  login(user: User) {
    // POST Request
    return this.http.post<User>(this.url, user);
  }
}
