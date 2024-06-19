import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from './new-task.model';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;

  @Output() closeDialog = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<NewTaskData>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  constructor(private tasksService: TasksService) {}

  onCancel() {
    this.closeDialog.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.closeDialog.emit();
  }
}
