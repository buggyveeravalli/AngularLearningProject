import { Component } from '@angular/core';
import { NavBarComponentComponent } from "../nav-bar-component/nav-bar-component.component";
import { ProductsComponentsComponent } from "../products-components/products-components.component";

@Component({
  selector: 'app-view-page',
  standalone: true,  
  imports: [NavBarComponentComponent, ProductsComponentsComponent],
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css'] 
})
export class ViewPageComponent {
  cartTotal: number = 0;
  cartItems: any[] = [];

  updateCartCount(count: number) {
    this.cartTotal = count;
  }

  updateCartItems(items: any[]) {
    this.cartItems = items;
  }
}
