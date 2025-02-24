import { Component } from '@angular/core';
import { NavBarComponentComponent } from '../nav-bar-component/nav-bar-component.component';
import { ProductsComponentsComponent } from '../products-components/products-components.component';
@Component({
  selector: 'app-view-page',
  imports: [NavBarComponentComponent, ProductsComponentsComponent],
  templateUrl: './view-page.component.html',
  styleUrl: './view-page.component.css'
})
export class ViewPageComponent {

}
