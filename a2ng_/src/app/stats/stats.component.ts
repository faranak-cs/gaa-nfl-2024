import { Component } from '@angular/core';
import { Team } from '../team';
import { TeamsService } from '../teams.service';
import * as d3 from 'd3';

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

      // d3 logic
    });
  }

  // Handlers

  selectTeamHandler(event: Event) {
    this.team = (event.target as HTMLSelectElement).value;
    console.log(this.team);
  }
}
