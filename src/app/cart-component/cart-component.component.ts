import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-cart-component',
  imports: [CommonModule],
  templateUrl: './cart-component.component.html',
  styleUrl: './cart-component.component.css'
})
export class CartComponentComponent {
  cartItems: any[] = [];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.cartItems = navigation.extras.state['cartItems'] || [];
    }
  }
}
