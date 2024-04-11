import { Component } from '@angular/core';
import { Result } from '../result';
import { ResultsService } from '../results.service';
import { TableItem } from '../table-item';
import { Team } from '../team';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css',
})
export class TablesComponent {
  teams: Team[] = [];
  results: Result[] = [];
  filterResults: Result[] = [];
  table: TableItem[] = [];

  wins: number = 0;
  losses: number = 0;
  draws: number = 0;
  diff: number = 0;
  team1Score: number = 0;
  team2Score: number = 0;
  pts: number = 0;

  // Constructor
  constructor(private resultService: ResultsService) {}

  // Initialize component
  ngOnInit() {
    this.resultService.getResultsByDivision(1).subscribe((res) => {
      this.results = res;
    });
  }
}
