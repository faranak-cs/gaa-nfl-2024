import { Component, inject } from '@angular/core';
import { Result } from '../result';
import { ResultsService } from '../results.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent {
  results: Result[] = [];

  resultService = inject(ResultsService);

  constructor() {
    this.resultService.getResults().subscribe((res) => {
      this.results = res;
    });
  }
}
