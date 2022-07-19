
import { Component, OnInit, Input } from '@angular/core';
import { Task} from 'src/app/model/Tasks';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  constructor() {}

  ngOnInit(): void {}

  
}