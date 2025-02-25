import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-samsung-buds3pro',
  imports: [],
  templateUrl: './samsung-buds3pro.component.html',
  styleUrl: './samsung-buds3pro.component.css'
})
export class SamsungBuds3proComponent {
 constructor(private router: Router) { }
Home() {
  this.router.navigate(['/homePage']);
}

}
