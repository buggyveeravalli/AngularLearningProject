import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google-pixel9',
  imports: [],
  templateUrl: './google-pixel9.component.html',
  styleUrl: './google-pixel9.component.css'
})
export class GooglePixel9Component {
 constructor(private router: Router) { }
Home() {
  this.router.navigate(['/homePage']);
}

}
