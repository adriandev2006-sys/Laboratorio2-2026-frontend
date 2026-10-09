import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AirplaneSearchComponent } from './airplane-search/airplane-search';

@Component({
 selector: 'app-root',
  imports: [RouterOutlet, AirplaneSearchComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Laboratorio2-2026-frontend');
}
