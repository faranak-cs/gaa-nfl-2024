import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Team } from '../team';
import { PlayersService } from '../players.service';
import { TeamsService } from '../teams.service';
import { ResultsService } from '../results.service';
import { Player } from '../player';
import { Result } from '../result';

@Component({
  selector: 'app-routes',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.css',
})
export class RoutesComponent {
  teams: Team[] = [];
  players: Player[] = [];
  results: Result[] = [];
  text: any[] = [];

  // Inject services
  constructor(
    private playerService: PlayersService,
    private teamService: TeamsService,
    private resultService: ResultsService
  ) {}

  // Button Handlers

  getResultsByDivisionHandler() {
    this.resultService.getResultsByDivision(1).subscribe((res) => {
      this.text = res;
    });
  }
  getResultsHandler() {
    this.resultService.getResults().subscribe((res) => {
      this.text = res;
    });
  }
  getPlayersHandler() {
    this.playerService.getPlayers().subscribe((res) => {
      this.text = res;
    });
  }
  getTeamsHandler() {
    this.teamService.getTeams().subscribe((res) => {
      this.text = res;
    });
  }
}
