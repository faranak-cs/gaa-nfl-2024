import { Component } from '@angular/core';
import { Result } from '../result';
import { ResultsService } from '../results.service';
import { Table } from '../table';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css',
})
export class TablesComponent {
  table: Table[] = [];
  results: Result[] = [];
  filterResults: Result[] = [];

  team1Score: Number = 0;
  team2Score: Number = 0;

  constructor(private resultService: ResultsService) {}

  ngOnInit() {
    this.resultService.getResultsByDivision(1).subscribe((res) => {
      this.results = res;

      // Calculate scores
      for (let i = 0; i < this.results.length; i++) {
        this.team1Score =
          this.results[i].team1Goals + this.results[i].team1Points;
        this.team2Score =
          this.results[i].team2Goals + this.results[i].team2Points;

        if (this.team1Score > this.team2Score) {
          this.table[i].teamName;
        }
      }
    });
  }
}
