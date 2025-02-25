import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-samsung-galaxy-watch7',
  imports: [],
  templateUrl: './samsung-galaxy-watch7.component.html',
  styleUrl: './samsung-galaxy-watch7.component.css'
})
export class SamsungGalaxyWatch7Component {
 constructor(private router: Router) { }
Home() {
  this.router.navigate(['/homePage']);
}

}
