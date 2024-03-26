import { Time } from '@angular/common';

export interface Result {
  id: number;
  division: string;
  team1: string;
  team2: string;
  team1ID: string;
  team2ID: string;
  team1Score: string;
  team2Score: string;
  team1Goals: number;
  team2Goals: number;
  team1Points: number;
  team2Points: number;
  date: Date;
  time: Date;
  competition: string;
  season: string;
}
