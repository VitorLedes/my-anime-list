import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-card',
  imports: [],
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.scss'
})

export class ActivityCardComponent {
  constructor(
    private router: Router
  ) {

  }

  goToLoginPage() {
    this.router.navigate(['login']);
  }
}
