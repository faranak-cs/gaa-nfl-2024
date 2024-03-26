import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './player';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  // URL of REST API service
  url: string = `http://localhost:3000/players`;

  // Inject HTTP Client
  constructor(private http: HttpClient) {}

  // get /players data from REST API server
  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.url);
  }
}
