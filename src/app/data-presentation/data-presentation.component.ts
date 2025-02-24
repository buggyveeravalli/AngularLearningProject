import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-presentation',
  imports: [CommonModule],
  templateUrl: './data-presentation.component.html',
  styleUrl: './data-presentation.component.css'
})
export class DataPresentationComponent {
  users: any[] = [];
  
  getTotalPrice(products: {price:number}[]) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].price;
    }
    return total;
  }
  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
}
