import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { RoutesComponent } from '../routes/routes.component';
import { TeamsComponent } from '../teams/teams.component';
import { PlayersComponent } from '../players/players.component';
import { ResultsComponent } from '../results/results.component';
import { LoginComponent } from '../login/login.component';
import { TablesComponent } from '../tables/tables.component';
import { StatsComponent } from '../stats/stats.component';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RoutesComponent,
    TeamsComponent,
    PlayersComponent,
    ResultsComponent,
    TablesComponent,
    StatsComponent,
    AdminComponent,
    LoginComponent,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {}
