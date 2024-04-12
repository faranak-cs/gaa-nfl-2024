import { Component, inject } from '@angular/core';
import { Player } from '../player';
import { PlayersService } from '../players.service';
import { TeamsService } from '../teams.service';
import { Team } from '../team';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css',
})
export class PlayersComponent {
  players: Player[] = [];
  teams: Team[] = [];
  team: string = 'All';

  filterPlayers: Player[] = [];

  // Inject services
  constructor(
    private playerService: PlayersService,
    private teamService: TeamsService
  ) {}

  // Get data
  ngOnInit() {
    this.playerService.getPlayers().subscribe((res) => {
      // sort by team name first then by player name
      res.sort((a, b) => {
        if (a.teamName > b.teamName) return 1;
        else if (a.teamName < b.teamName) return -1;
        else {
          if (a.name > b.name) return 1;
          else if (a.name < b.name) return -1;
          else return 0;
        }
      });

      this.players = res;
      this.filterPlayers = res;
    });
    this.teamService.getTeams().subscribe((res) => {
      this.teams = res;
    });
  }

  // Handlers

  selectTeamHandler(event: Event) {
    this.team = (event.target as HTMLSelectElement).value;

    // filter players
    this.filterPlayers = this.team
      ? this.players.filter((player) => player.teamName === this.team)
      : this.players;
  }
}
