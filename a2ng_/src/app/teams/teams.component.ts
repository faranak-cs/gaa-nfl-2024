import { Component, inject } from '@angular/core';
import { Team } from '../team';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css',
})
export class TeamsComponent {
  // teamURL: string = `assets/logos/${team.name}.png`;
  teams: Team[] = [];

  // Inject team service
  teamService = inject(TeamsService);

  constructor() {
    this.teamService.getTeams().subscribe((res) => {
      this.teams = res;
    });
  }
}
