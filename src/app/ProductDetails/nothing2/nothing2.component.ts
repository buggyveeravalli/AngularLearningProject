import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nothing2',
  imports: [],
  templateUrl: './nothing2.component.html',
  styleUrl: './nothing2.component.css'
})
export class Nothing2Component {
 constructor(private router: Router) { }
Home() {
  this.router.navigate(['/homePage']);
}

}
