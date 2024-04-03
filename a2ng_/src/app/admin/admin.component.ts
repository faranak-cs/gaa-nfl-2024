import { Component } from '@angular/core';
import { Result } from '../result';
import { ResultsService } from '../results.service';
import { DatePipe } from '@angular/common';

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

  team1_score: string = '';
  team2_score: string = '';

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

  // Handler

  selectRoundHandler(event: Event) {
    this.round = (event.target as HTMLSelectElement).value;

    // filter results
    this.filterResults = this.round
      ? this.results.filter((res) => res.round === this.round)
      : this.results;
  }
}
