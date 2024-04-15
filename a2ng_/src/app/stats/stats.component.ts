import { Component } from '@angular/core';
import { Team } from '../team';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css',
})
export class StatsComponent {
  teams: Team[] = [];
  team: string = 'Team';

  // Inject services
  constructor(private teamService: TeamsService) {}

  // Get data
  ngOnInit() {
    this.teamService.getTeams().subscribe((res) => {
      this.teams = res;
    });
  }

  // Handlers

  selectTeamHandler(event: Event) {
    this.team = (event.target as HTMLSelectElement).value;
    console.log(this.team);
  }
}
