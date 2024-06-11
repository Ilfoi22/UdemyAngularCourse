import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) id!: string; 

  @Output() select = new EventEmitter<string>();

  currentUser = DUMMY_USERS.find(user => user.id === this.id)!;

  onSelectClick() {
    this.select.emit(this.currentUser.name);
  }
}
