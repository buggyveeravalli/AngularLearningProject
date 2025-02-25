import { CanComponentDeactivate } from "./NavigationGaurd";


export class BaseComponent implements CanComponentDeactivate {
  canDeactivate(): boolean {
  return true;
}

}
