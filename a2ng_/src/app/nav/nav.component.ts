import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

import { RoutesComponent } from '../routes/routes.component';
import { TeamsComponent } from '../teams/teams.component';
import { PlayersComponent } from '../players/players.component';
import { ResultsComponent } from '../results/results.component';
import { LoginComponent } from '../login/login.component';
import { TablesComponent } from '../tables/tables.component';
import { StatsComponent } from '../stats/stats.component';
import { AdminComponent } from '../admin/admin.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { AuthService } from '../auth.service';

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
    JsonPipe,
    CommonModule,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  email: string = '';
  isloggedin: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      if (this.authService.IsLoggedIn()) {
        this.isloggedin = true;
        this.email = this.authService.getUserEmail();
      } else {
        this.isloggedin = false;
        this.email = this.authService.getUserEmail();
      }
    });
  }

  // Handler

  logoutHandler() {
    // clear cookie
    this.authService.logout();

    // Set isLoggedIn
    this.authService.isLoggedIn = false;

    // Route to Login page
    this.router.navigateByUrl('/login');
  }
}
