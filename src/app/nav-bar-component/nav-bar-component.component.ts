import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-component',
  templateUrl: './nav-bar-component.component.html',
  styleUrls: ['./nav-bar-component.component.css'],
  imports: [CommonModule]
})
export class NavBarComponentComponent implements OnChanges {
  @Input() cartCount: number = 0;
  @Input() cartItems: any[] = []; 

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cartCount'] && this.cartCount > 10) {
      alert("You have more than 10 items in your cart. Please consider checking out.");
    }
  }

  Logout() { 
    this.router.navigate(['/login']); 
  } 

  goToCart() {
    this.router.navigate(['/cart'], { state: { cartItems: this.cartItems } }); // ✅ Pass cart items
  }
}
