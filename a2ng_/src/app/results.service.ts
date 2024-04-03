import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from './result';
import { Score } from './score';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  // URL of REST API service
  url: string = `http://localhost:3000/results`;

  // Inject HTTP Client
  constructor(private http: HttpClient) {}

  // get /results data from REST API server
  getResults(): Observable<Result[]> {
    return this.http.get<Result[]>(this.url);
  }

  // get /results/ID data from REST API server
  getResultsByDivision(id: number): Observable<Result[]> {
    return this.http.get<Result[]>(`${this.url}/${id}`);
  }

  // update /results/matchID
  updateResult(score: Score, matchID: number) {
    return this.http.put(`${this.url}/${matchID}`, score, {
      observe: 'response',
    });
  }
}
