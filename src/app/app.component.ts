import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Iphone16productDetailsComponentComponent } from "./ProductDetails/iphone16product-details-component/iphone16product-details-component.component";
import { LoginPageComponentComponent } from "./login-page-component/login-page-component.component";
import { NavBarComponentComponent } from "./nav-bar-component/nav-bar-component.component";
import { RegistrationComponentComponent } from "./registration-component/registration-component.component";
import { ProductsComponentsComponent } from "./products-components/products-components.component";
import { ViewPageComponent } from "./view-page/view-page.component";
import { DataPresentationComponent } from "./data-presentation/data-presentation.component";
import { Samsungs24ultraComponent } from "./ProductDetails/samsungs24ultra/samsungs24ultra.component";
import { AppleAirPodsMaxComponent } from "./ProductDetails/apple-air-pods-max/apple-air-pods-max.component";
import { Nothing2Component } from "./ProductDetails/nothing2/nothing2.component";
import { GooglePixel9Component } from "./ProductDetails/google-pixel9/google-pixel9.component";
import { SamsungBuds3proComponent } from "./ProductDetails/samsung-buds3pro/samsung-buds3pro.component";
import { SamsungGalaxyWatch7Component } from "./ProductDetails/samsung-galaxy-watch7/samsung-galaxy-watch7.component";
import { AppleVisionProComponent } from "./ProductDetails/apple-vision-pro/apple-vision-pro.component";
import { UserDataPresentationComponent } from "./user-data-presentation/user-data-presentation.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Iphone16productDetailsComponentComponent,
    LoginPageComponentComponent, NavBarComponentComponent, RegistrationComponentComponent,
    ProductsComponentsComponent, ViewPageComponent, DataPresentationComponent, Samsungs24ultraComponent,
    AppleAirPodsMaxComponent, Nothing2Component, GooglePixel9Component, SamsungBuds3proComponent,
    SamsungGalaxyWatch7Component, AppleVisionProComponent, UserDataPresentationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EkartProject';
}
