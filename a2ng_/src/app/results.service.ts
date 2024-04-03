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

  // get /results/div data from REST API server
  getResultsByDivision(div: number): Observable<Result[]> {
    return this.http.get<Result[]>(`${this.url}/${div}`);
  }

  // update /results/id
  updateResult(score: Score, id: number) {
    return this.http.put(`${this.url}/${id}`, score, {
      observe: 'response',
    });
  }

  // delete /results/id
  deleteResult(id: number) {
    return this.http.delete(`${this.url}/${id}`, { observe: 'response' });
  }
}
