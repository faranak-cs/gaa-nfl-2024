import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RoutesComponent } from './routes/routes.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { ResultsComponent } from './results/results.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterOutlet,
    RoutesComponent,
    TeamsComponent,
    PlayersComponent,
    ResultsComponent,
    NavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'a2ng';
}
