import { Component } from '@angular/core';
import { Iphone16productDetailsComponentComponent } from "../iphone16product-details-component/iphone16product-details-component.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-samsungs24ultra',
  imports: [Iphone16productDetailsComponentComponent],
  templateUrl: './samsungs24ultra.component.html',
  styleUrl: './samsungs24ultra.component.css'
})
export class Samsungs24ultraComponent {
 constructor(private router: Router) { }
Home() {
  this.router.navigate(['/homePage']);
}

}
