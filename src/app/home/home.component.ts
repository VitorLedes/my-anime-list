import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityCardComponent } from '../activity-card/activity-card.component';

@Component({
  selector: 'app-home',
  imports: [
    ActivityCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private router: Router
  ) {

  }
}
