import { Component } from '@angular/core';
import { Team } from '../team';
import { TeamsService } from '../teams.service';
import * as d3 from 'd3';
import { ResultsService } from '../results.service';
import { Result } from '../result';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css',
})
export class StatsComponent {
  results: Result[] = [];
  filterResults: Result[] = [];

  teams: Team[] = [];
  team: string = 'Team';

  points: { x1: number; x2: number }[] = [
    { x1: 0, x2: 30 },
    { x1: 140, x2: 170 },
    { x1: 280, x2: 310 },
    { x1: 420, x2: 450 },
  ];

  // Inject services
  constructor(
    private teamService: TeamsService,
    private resultService: ResultsService
  ) {}

  // Get data
  ngOnInit() {
    this.resultService.getResults().subscribe((res) => {
      this.results = res;

      // Eliminate result with zero scores
      this.results = this.results.filter(
        (result) => result.team1Score !== '0' && result.team2Score !== '0'
      );
    });

    this.teamService.getTeams().subscribe((res) => {
      this.teams = res;
    });
  }

  // Handlers

  selectTeamHandler(event: Event) {
    this.team = (event.target as HTMLSelectElement).value;

    this.filterResults = this.team
      ? this.results.filter(
          (result) => result.team1 === this.team || result.team2 === this.team
        )
      : this.results;
  }
}
