import { Routes } from '@angular/router';
import { RoutesComponent } from './routes/routes.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { ResultsComponent } from './results/results.component';
import { TablesComponent } from './tables/tables.component';
import { StatsComponent } from './stats/stats.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: RoutesComponent, title: 'Routes' },
  { path: 'teams', component: TeamsComponent, title: 'Teams' },
  { path: 'players', component: PlayersComponent, title: 'Players' },
  { path: 'results', component: ResultsComponent, title: 'Results' },
  { path: 'results', component: ResultsComponent, title: 'Results' },
  { path: 'tables', component: TablesComponent, title: 'Tables' },
  { path: 'stats', component: StatsComponent, title: 'Stats' },
  { path: 'admin', component: AdminComponent, title: 'Admin' },
  { path: 'login', component: LoginComponent, title: 'Login' },
];
