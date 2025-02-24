import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar-component',
  imports: [],
  templateUrl: './nav-bar-component.component.html',
  styleUrl: './nav-bar-component.component.css',
})
export class NavBarComponentComponent {
  constructor(private router: Router) {}
}
