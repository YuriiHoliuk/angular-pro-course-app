import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector:        'app-navigation',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl:     './navigation.component.html',
  styleUrls:       ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor() {
  }
}
