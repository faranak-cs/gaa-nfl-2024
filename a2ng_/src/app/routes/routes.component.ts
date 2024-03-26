import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Team } from '../team';

@Component({
  selector: 'app-routes',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.css',
})
export class RoutesComponent {
  teams: Team[] = [{ name: 'FSD' }, { name: 'LSD' }, { name: 'WSD' }];
}
