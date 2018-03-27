import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector:        'app-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl:     './list-item.component.html',
  styleUrls:       ['./list-item.component.scss']
})
export class ListItemComponent {

  @Input() item: any;

  @Output() remove: EventEmitter<any> = new EventEmitter();

  toggled = false;

  constructor() {
  }

  getRoute(item: any) {
    return ['../meals', item.$key];
  }

  removeItem() {
    this.remove.emit(this.item);
  }

  toggle() {
    this.toggled = !this.toggled;
  }
}
