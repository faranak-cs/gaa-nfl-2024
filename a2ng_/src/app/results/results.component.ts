import { Component, inject } from '@angular/core';
import { Result } from '../result';
import { ResultsService } from '../results.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent {
  results: Result[] = [];

  filterResults: Result[] = [];
  filterResults_: Result[] = [];

  currentRound: any = 1;
  prevRound: any = 7;
  nextRound: any = 2;

  enteredTeamName: string = '';

  // Inject services
  constructor(private resultService: ResultsService) {}

  ngOnInit() {
    // Get data
    this.resultService.getResults().subscribe((res) => {
      this.results = res;

      // Sort by date
      this.results.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      });

      // Sort by division
      this.results.sort((a, b) => (a.division > b.division ? 1 : -1));

      // Filter based on round
      this.filterResults = this.results.filter(
        (res) => res.round == this.currentRound
      );
      this.filterResults_ = this.filterResults;
    });
  }

  // Handler
  teamHandler(event: Event) {
    this.enteredTeamName = (event.target as HTMLInputElement).value;
    this.filterResults = this.enteredTeamName
      ? this.filterResults_.filter(
          (result) =>
            result.team1.includes(this.enteredTeamName) ||
            result.team2.includes(this.enteredTeamName)
        )
      : this.filterResults_;
  }

  // Previous Round Handler

  prevRoundHandler() {
    if (this.prevRound === 1) {
      this.nextRound = this.currentRound;
      this.currentRound = this.prevRound;
      this.prevRound = 7;
    } else {
      this.nextRound = this.currentRound;
      this.currentRound = this.prevRound;
      this.prevRound = this.prevRound - 1;
    }

    this.filterResults = this.results.filter(
      (res) => res.round == this.currentRound
    );
  }

  // Next Round Handler
  nextRoundHandler() {
    if (this.nextRound === 7) {
      this.prevRound = this.currentRound;
      this.currentRound = this.nextRound;
      this.nextRound = 1;
    } else {
      this.prevRound = this.currentRound;
      this.currentRound = this.nextRound;
      this.nextRound = this.nextRound + 1;
    }

    this.filterResults = this.results.filter(
      (res) => res.round == this.currentRound
    );
  }
}
