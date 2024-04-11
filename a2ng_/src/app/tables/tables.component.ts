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
  teams: string[] = [];

  results: Result[] = [];

  table: TableItem[] = [];
  filterTable: TableItem[] = [];

  pd: number = 0;
  wins: number = 0;
  losses: number = 0;
  draws: number = 0;
  diff: number = 0;
  pts: number = 0;

  // Constructor
  constructor(private resultService: ResultsService) {}

  // Initialize component
  ngOnInit() {
    this.resultService.getResultsByDivision(1).subscribe((res) => {
      this.results = res;

      // First get teams array from results array
      for (let i = 0; i < this.results.length; i++) {
        if (!this.teams.some((team) => team === this.results[i].team1)) {
          this.teams.push(this.results[i].team1);
        }
      }
      // For each team, check results
      for (let i = 0; i < this.teams.length; i++) {
        for (let j = 0; j < this.results.length; j++) {
          // Calculate scores first
          let team1_score =
            3 * this.results[j].team1Goals + this.results[j].team1Points;
          let team2_score =
            3 * this.results[j].team2Goals + this.results[j].team2Points;

          // Skip unplayed matches
          if (team1_score == 0 || team2_score == 0) continue;

          // if team name is 'team1' in results array
          if (this.teams[i] === this.results[j].team1) {
            // won
            if (team1_score > team2_score) {
              this.wins++;
            }
            //lost
            else if (team1_score < team2_score) {
              this.losses++;
            }
            // drawn
            else {
              this.draws++;
            }
            this.diff = this.diff + (team1_score - team2_score);
            this.pd++;
          }
          // if team name is 'team2' in results array
          else if (this.teams[i] === this.results[j].team2) {
            // won
            if (team1_score < team2_score) {
              this.wins++;
            }
            //lost
            else if (team1_score > team2_score) {
              this.losses++;
            }
            // drawn
            else {
              this.draws++;
            }
            this.diff = this.diff + (team2_score - team1_score);
            this.pd++;
          }
        }

        // calculate points in the end
        this.pts = 2 * this.wins + this.draws;

        // Create json object and save it onto table array
        this.table.push({
          teamPos: 0,
          teamName: this.teams[i],
          pd: this.pd,
          wins: this.wins,
          draws: this.draws,
          losses: this.losses,
          difference: this.diff,
          teamPts: this.pts,
        });

        // Set all values to zero again
        this.pd = 0;
        this.wins = 0;
        this.losses = 0;
        this.draws = 0;
        this.diff = 0;
        this.pts = 0;
      }

      // Sort teams based on points
      this.table.sort((a, b) => b.difference - a.difference);
      this.table.sort((a, b) => b.teamPts - a.teamPts);

      // Asign positions
      for (let i = 0; i < this.teams.length; i++) {
        this.table[i].teamPos = i + 1;
      }
    });
  }
}
