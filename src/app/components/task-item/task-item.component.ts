
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task} from 'src/app/model/Tasks';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  //@Input shares the data from parent component to the child component
  @Input() task: Task;

  // @output -> share the data from child to the parent component

  @Output() OnDeleteTask: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(task){
   this.OnDeleteTask.emit(task)
  }

  
}