import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  UrlTree,
  Router,
  NavigationStart,
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}
@Injectable({
  providedIn: 'root',
})
export class NavigationGuard implements CanDeactivate<CanComponentDeactivate> {
  private isNavigatingBack = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event: any) => {
        if (event.navigationTrigger === 'popstate') {
          this.isNavigatingBack = true;
        } else {
          this.isNavigatingBack = false;
        }
      });
  }
  canDeactivate(
    component: CanComponentDeactivate
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isNavigatingBack) {
      alert('Navigation is blocked');
      return false;
    }
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
