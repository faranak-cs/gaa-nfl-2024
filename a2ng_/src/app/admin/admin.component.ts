import { Component } from '@angular/core';
import { Result } from '../result';
import { ResultsService } from '../results.service';
import { DatePipe } from '@angular/common';
import { Score } from '../score';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  round: string = '1';
  results: Result[] = [];
  filterResults: Result[] = [];

  score: Score = { team1_score: '', team2_score: '' };
  id: number = 0;

  // Inject services
  constructor(private resultService: ResultsService) {}

  // Get data
  ngOnInit() {
    this.resultService.getResults().subscribe((res) => {
      this.results = res;
      this.filterResults = res;

      // filter results
      this.filterResults = this.round
        ? this.results.filter((res) => res.round === this.round)
        : this.results;
    });
  }

  // Handlers

  selectRoundHandler(event: Event) {
    this.round = (event.target as HTMLSelectElement).value;

    // filter results
    this.filterResults = this.round
      ? this.results.filter((res) => res.round === this.round)
      : this.results;
  }

  team1ScoreHandler(event: Event) {
    this.score.team1_score = (event.target as HTMLInputElement).value;
  }

  team2ScoreHandler(event: Event) {
    this.score.team2_score = (event.target as HTMLInputElement).value;
  }

  updateHandler() {
    this.resultService.updateResult(this.score, 16389).subscribe((res) => {
      if (res.status === 201) {
        console.log(res.body);
      }
    });
  }

  deleteHandler() {
    this.resultService.deleteResult(16389).subscribe((res) => {
      if (res.status === 200) {
        console.log(res.body);
      }
    });
  }
}
