import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from './team';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  // URL of REST API service
  url: string = `http://localhost:3000/teams`;

  // Inject HTTP Client
  constructor(private http: HttpClient) {}

  // get /teams data from REST API server
  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.url);
  }
}
