import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/Todos';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  InputTodo:string="";

 todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.todos=[
      {
        id:1,
        title:'Learn Angular',
        completed:false
      },
      {
        id:2,
        title:'Learn  Typescript',
        completed:true
      },
      {
        id:3,
        title:'Learn JavaScript',
        completed:true
      }
    ]
  }
  toggleDone(id:number){
    this.todos.map((todo,i)=>{
    if(i===id){
      todo.completed =!todo.completed
    }
    return todo;
    })
  }
  deleteTodo(id:number){
    this.todos =this.todos.filter((todo,i)=> i!==id)
  }

  addTodo(){
    this.todos.push({
      id:this.todos.length+1,
      title:this.InputTodo,
      completed:false
    })
    this.InputTodo=""
  }
}
