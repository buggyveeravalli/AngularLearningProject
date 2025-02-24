import { Routes } from '@angular/router';
import { LoginPageComponentComponent } from './login-page-component/login-page-component.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { AppleAirPodsMaxComponent } from './ProductDetails/apple-air-pods-max/apple-air-pods-max.component';
import { AppleVisionProComponent } from './ProductDetails/apple-vision-pro/apple-vision-pro.component';
import { GooglePixel9Component } from './ProductDetails/google-pixel9/google-pixel9.component';
import { Iphone16productDetailsComponentComponent } from './ProductDetails/iphone16product-details-component/iphone16product-details-component.component';
import { Nothing2Component } from './ProductDetails/nothing2/nothing2.component';
import { SamsungBuds3proComponent } from './ProductDetails/samsung-buds3pro/samsung-buds3pro.component';
import { SamsungGalaxyWatch7Component } from './ProductDetails/samsung-galaxy-watch7/samsung-galaxy-watch7.component';
import { Samsungs24ultraComponent } from './ProductDetails/samsungs24ultra/samsungs24ultra.component';
import { UserDataPresentationComponent } from './user-data-presentation/user-data-presentation.component';
import{ NavigationGuard } from './NavigationGaurd/NavigationGaurd';
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full',canDeactivate:[NavigationGuard] },
  { path: 'login', component: LoginPageComponentComponent,canDeactivate:[NavigationGuard] },
  {path:'register',component:RegistrationComponentComponent,canDeactivate:[NavigationGuard]},
  { path: 'homePage', component: ViewPageComponent,canDeactivate:[NavigationGuard] },
  {path:'appleairpodsmax',component:AppleAirPodsMaxComponent,canDeactivate:[NavigationGuard]},
  {path:'applevisionpro',component:AppleVisionProComponent,canDeactivate:[NavigationGuard]},
  {path:'googlepixel9',component:GooglePixel9Component,canDeactivate:[NavigationGuard]},
  {path:'iphone16promax',component:Iphone16productDetailsComponentComponent,canDeactivate:[NavigationGuard]},
  {path:'nothing2',component:Nothing2Component,canDeactivate:[NavigationGuard]},
  {path:'samsungbuds3pro',component:SamsungBuds3proComponent,canDeactivate:[NavigationGuard]},
  {path:'samsunggalaxy7',component:SamsungGalaxyWatch7Component,canDeactivate:[NavigationGuard]},
  {path:'samsungs24ultra',component:Samsungs24ultraComponent,canDeactivate:[NavigationGuard]},
  {path:'userdatapresentation',component:UserDataPresentationComponent,canDeactivate:[NavigationGuard]}
];
