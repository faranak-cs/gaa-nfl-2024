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
  teams: Team[] = [];

  // Inject team service
  constructor(private teamService: TeamsService) {}

  // Get data
  ngOnInit() {
    this.teamService.getTeams().subscribe((res) => {
      this.teams = res;
    });
  }
}
