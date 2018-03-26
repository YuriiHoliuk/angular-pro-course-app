import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../auth/models/user';

@Component({
  selector:    'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls:   ['./header.component.scss']
})
export class HeaderComponent {

  @Input() user: User;

  @Output() logout: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  logoutUser() {
    this.logout.emit();
  }
}
