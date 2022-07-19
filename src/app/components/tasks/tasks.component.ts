import { Component, OnInit,Input } from '@angular/core';
import { Task} from 'src/app/model/Tasks';
import { TaskService } from 'src/app/service/task.service.';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}


  ngOnInit():void{
    this.get()
  }
  get(){
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
   
  }

 
  
}
