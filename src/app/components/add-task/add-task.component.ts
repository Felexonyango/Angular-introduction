import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/model/Tasks';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()

name:string;
description:string

constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

    const newTask = {
      id:Math.random(),
      name:this.name,
      description:this.description
    }

    //event
    this.onAddTask.emit(newTask)

    this.description="",
    this.name=''
  }
}
